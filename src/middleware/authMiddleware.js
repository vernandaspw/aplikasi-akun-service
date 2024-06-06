const jwt = require('jsonwebtoken');

const { db_aplikasi_akun } = require('../config/db');


const JWT_SECRET = process.env.JWT_SECRET;

async function authMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(401).json({ msg: 'Token akses tidak ditemukan' });
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return res.status(401).json({ msg: 'Format token akses tidak benar' });
        }

        const tokenCookies = req.cookies[process.env.COOKIES_TOKEN];

        if (accessToken != tokenCookies) {
            return res.status(401).json({ msg: 'Token cookies tidak valid' });
        }

        const decoded = jwt.verify(accessToken, JWT_SECRET);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ msg: 'Token akses tidak valid' });
        }


        const user = await db_aplikasi_akun.users.findUnique({
            where: {
                id: decoded.id,
            },
        });
        if (!user) {
            return res.status(404).json({ msg: 'Pengguna tidak ditemukan' });
        }

        if (accessToken != user.token) {
            return res.status(403).json({ msg: 'Token akses tidak berlaku' });
        }

        if (!user.isActive) {
            return res.status(401).json({ msg: 'Pengguna tidak aktif' });
        }

        req.user = user;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            console.error('TokenExpiredError:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses sudah kedaluwarsa' });
        } else if (error.name === 'JsonWebTokenError') {
            console.error('JsonWebTokenError:', error); // Logging error
            return res.status(401).json({ msg: `Token akses tidak valid: ${error.message}` });
        } else {
            console.error('Error:', error); // Logging error
            return res.status(401).json({ msg: 'Token akses tidak valid' + error.message });
        }
    }


}

module.exports = authMiddleware;
