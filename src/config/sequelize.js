const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize(process.env.APLIKASI_AKUN_DB_DATABASE, process.env.APLIKASI_AKUN_DB_USERNAME, process.env.APLIKASI_AKUN_DB_PASSWORD, {
  host: process.env.APLIKASI_AKUN_DB_HOST,
  dialect: process.env.APLIKASI_AKUN_DB_CONNECTION,
  port: process.env.APLIKASI_AKUN_DB_PORT
});

