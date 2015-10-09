var express = require('express');
var router = express.Router();

router.use('/products', require('./products'));
router.use('/growers', require('./growers'));

module.exports = router;
