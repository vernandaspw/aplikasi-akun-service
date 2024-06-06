const { db_aplikasi_akun } = require("../../config/db");

exports.getAll = async (req, res) => {
    try {
        const response = await db_aplikasi_akun.apps.findMany();

        res.status(200).json({
            msg: 'success',
            data: response
        })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getById = async (req, res) => {
    const { id } = req.params;

    try {
        const app = await prisma.apps.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!app) {
            return res.status(404).json({ msg: `Aplikasi dengan ID ${id} tidak ditemukan` });
        }

        res.status(200).json(app);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
