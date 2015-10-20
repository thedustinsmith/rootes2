var express = require('express');
var router = express.Router();

router.use('/products', require('./products'));
router.use('/growers', require('./growers'));
router.use('/locations', require('./locations'));
router.use('/applicators', require('./applicators'));

module.exports = router;
