const { db_aplikasi_akun } = require("../../config/db")

exports.get = async (req, res) => {
    try {
        const datas = await db_aplikasi_akun.users.findMany()
        
        res.status(200).json({ message: 'success', data: datas })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

