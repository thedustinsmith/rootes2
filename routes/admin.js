var express = require('express');
var router = express.Router();
var db = require('../db/index');

router.get('/', function(req, res, next) {
    res.render('admin/index', { title: 'Rootes Admin' });
});
router.get('/api', function(req, res, next) {
    res.render('admin/api', { title: 'Rootes Admin' });
});
router.get('/products', function(req, res, next) {
    res.render('admin/products', { title: 'Rootes Admin' });
});
router.get('/growers', function(req, res, next) {
    res.render('admin/growers', { title: 'Rootes Admin' });
});
router.get('/applicators', function(req, res, next) {
    res.render('admin/applicators', { title: 'Rootes Admin' });
});
router.get('/locations', function(req, res, next) {
    var growerID = req.query.grower;
    if (!growerID) res.send(404);

    new db.Grower({
        id: growerID
    }).fetch().done(function (grower) {
        res.render('admin/locations', { 
            title: 'Rootes Admin', 
            grower: grower.toJSON() 
        });
    });
        
});
module.exports = router;
