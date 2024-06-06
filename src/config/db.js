const { PrismaClient: PrismaClientDb1 } = require('../../prisma/AplikasiAkun');
// const { PrismaClient: PrismaClientDb2 } = require('../../prisma/client2');

const db_aplikasi_akun = new PrismaClientDb1();
// const dbsimpeg = new PrismaClientDb2();

module.exports = {
    db_aplikasi_akun,
    // dbsimpeg
};

// npx prisma db pull --schema=prisma/schema1.prisma
// npx prisma db push --schema=prisma/schema1.prisma
// npx prisma generate --schema=prisma/schema1.prisma
