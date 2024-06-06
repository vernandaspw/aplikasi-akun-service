const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Sesuaikan dengan lokasi file koneksi Sequelize Anda

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  google_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: 'users_username_unique',
      msg: 'Username must be unique'
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: {
      name: 'users_email_unique',
      msg: 'Email must be unique'
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: {
      name: 'users_phone_unique',
      msg: 'Phone must be unique'
    }
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: true
  },
  codeExpiredAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  codeResendAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  lastSeenAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  refreshToken: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

module.exports = User;
