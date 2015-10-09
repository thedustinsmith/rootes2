var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/index', { title: 'Rootes Admin' });
});
router.get('/forms', function(req, res, next) {
    res.render('admin/forms', { title: 'Rootes Admin' });
});

module.exports = router;
