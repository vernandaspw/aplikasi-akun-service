var express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
var router = express.Router();

// ASIFA - APLIKASI SITI FATIMAH =====================
// AUTH
router.post('/v1/auth/login', require('../controller/api/authController').login);
router.post('/v1/auth/token', require('../controller/api/authController').refreshToken);
router.post('/v1/auth/logout', authMiddleware, require('../controller/api/authController').logout);
// ENDAUTH

// PULL AKUN SIMPEG
// router.post('/v1/auth/sync-register', require('../controller/api/authController').syncRegister);
// router.post('/v1/auth/register', require('../controller/api/authController').register);

// USER
// router.get('/v1/user', authMiddleware, require('../controller/api/userController').get);

// END ASIFA ===========================================

// APLIKASI & AKUN ASIFA
router.get('/v1/apps', require('../controller/api/appController').getAll);

// router.get('/v1/apps/:id', authMiddleware, require('../controller/api/appController').getById);

module.exports = router