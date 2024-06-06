const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db_aplikasi_akun } = require("../../config/db");
const e = require("express");
const { v4: uuid } = require('uuid');
const cookie = require('cookie');
const { z } = require('zod');
const { convertServerToClient } = require('../../config/datetime');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

exports.syncRegister = async (req, res) => {
    try {
        const { username, password } = req.body;

        const userSimpeg = await dbsimpeg.user.findMany();

        // Map the data to extract the necessary information
        const userData = userSimpeg.map(e => ({
            id: uuid(),
            nama: e.nama,
            username: e.username,
            password: e.password,
            isActive: e.status == "Aktif" ? true : false
        }));

        const responses = [];

        for (const user of userData) {
            const existingUser = await db_aplikasi_akun.users.findUnique({
                where: {
                    username: user.username
                }
            });

            if (existingUser) {
                // If the username exists, skip creating the user and push a response indicating it
                responses.push({ username: user.username, status: 'Username already exists, skipping user creation' });
            } else {
                // If the username doesn't exist, create the user
                try {
                    const newUser = await db_aplikasi_akun.users.create({
                        data: user
                    });
                    responses.push({ username: newUser.username, status: 'User created successfully' });
                } catch (error) {
                    responses.push({ username: user.username, status: 'Error creating user' });
                }
            }
        }

        return res.status(200).json(responses)

        // const existingUser = await prisma.user.findUnique({
        //     where: {
        //         username,
        //     },
        // });

        // if (existingUser) {
        //     return res.status(400).json({ message: 'Username sudah digunakan' });
        // }

        // const hashedPassword = await bcrypt.hash(password, 10);

        // const newUser = await prisma.user.create({
        //     data: {
        //         username,
        //         password: hashedPassword,
        //     },
        // });

        // res.status(201).json({ message: 'Pengguna berhasil didaftarkan', user: newUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan ' + error });
    }
}

exports.register = async (req, res) => {
    
}

exports.login = async (req, res) => {
    const datetimeServer = new Date();
    const datetimeClient = convertServerToClient(datetimeServer);

    try {
        const { username, password } = req.body;
        const userValidator = z.object({
            username: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }),
            password: z.string({
                message: 'wajib di isi'
            }).nonempty({ message: 'wajib diisi' }),
        });
        const validator = userValidator.safeParse(req.body);
        if (!validator.success) {
            return res.status(422).json(validator.error.errors);
        }
        const user = await db_aplikasi_akun.users.findUnique({
            where: {
                username: username,
            },
        });
        if (!user) {
            return res.status(400).json({ message: 'Pengguna tidak ditemukan' });
        }
        if (user.isActive == false) {
            return res.status(400).json({ message: 'Pengguna tidak aktif' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Password salah' });
        }

        const payload = {
            id: user.id,
            avatar: user.avatar,
            nama: user.nama,
            isActive: user.isActive,
        }

        const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRED
        const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRED
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: accessTokenExpiresIn });
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: refreshTokenExpiresIn });

        await db_aplikasi_akun.users.update({
            where: {
                id: user.id,
            },
            data: {
                token: accessToken,
                tokenRefresh: refreshToken,
            }
        })

        res.cookie(process.env.COOKIES_TOKEN, accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.cookie(process.env.COOKIES_TOKEN_REFRESH, refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken, accessTokenExpiresIn, refreshToken, refreshTokenExpiresIn });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mencoba masuk' + error });
    }
};

exports.refreshToken = async (req, res) => {

    const { refreshToken } = req.body;
    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

        if (!decoded) {
            return res.status(403).json({ message: 'Token refresh tidak valid' });
        }

        const user = await db_aplikasi_akun.users.findUnique({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        if (refreshToken != user.tokenRefresh) {
            return res.status(403).json({ message: 'Token refresh tidak berlaku' });
        }

        if (user.isActive == false) {
            return res.status(400).json({ message: 'Pengguna tidak aktif' });
        }

        const payload = {
            id: user.id,
            avatar: user.avatar,
            nama: user.nama,
            isActive: user.isActive,
        }

        const accessTokenExpiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRED
        const refreshTokenExpiresIn = process.env.JWT_REFRESH_TOKEN_EXPIRED
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: accessTokenExpiresIn });
        const refreshTokenGenerate = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: refreshTokenExpiresIn });

        await db_aplikasi_akun.users.update({
            where: {
                id: user.id,
            },
            data: {
                token: accessToken,
                tokenRefresh: refreshTokenGenerate,
            }
        })

        res.cookie(process.env.COOKIES_TOKEN, accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.cookie(process.env.COOKIES_TOKEN_REFRESH, refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken, accessTokenExpiresIn, refreshToken, refreshTokenExpiresIn });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui token akses ' + error });
    }
}
exports.logout = async (req, res) => {
    try {
        const user = req.user

        await db_aplikasi_akun.users.update({
            where: { id: user.id },
            data: { token: null, tokenRefresh: null },
        });

        res.clearCookie(process.env.COOKIES_TOKEN);
        res.clearCookie(process.env.COOKIES_TOKEN_REFRESH);

        return res.status(200).json({ message: 'Berhasil logout' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Terjadi kesalahan saat logout: ' + error });
    }
}
