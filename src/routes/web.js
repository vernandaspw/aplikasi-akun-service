var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', require('../controller/web/indexController').index);

module.exports = router;
