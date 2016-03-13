var express = require('express');
var router = express.Router();
var moment = require('moment');
var db = require('../db/index');
var Promise = require('bluebird');
var _ = require('lodash');

router.get('/', function (req, res, next) {
    var startDate = moment(),
        endDate = startDate.add(-1, 'months');

    res.render('jobs/index', { title: 'Jobs' });
});

router.get('/add', function (req, res, next) {
    var a = db.Applicator.fetchAll(),
        p = db.Product.where({IsRemoved: false}).fetchAll(); 

    Promise.all([a, p]).then(function (result) {
        var products = result[1],
            applicators = result[0];

        res.render('jobs/add', {
            applicators: applicators.toJSON(),
            products: products.toJSON()
        });
    })
});

router.post('/add', function (req, res, next) {
    var j = req.body.Job;
    var prods = req.body.JobProducts;

    function saveProducts (job) {
        _.remove(prods, function (p) { return p.ProductID == '-1'; });
        prods.forEach(function (p) { p.JobID = job.id; });
        return Promise.all(db.Job_Products.forge(prods).invoke('save'));
    }

    console.log(j);
    console.log(prods);

    var jobSave = db.Job.forge(j).save();
    jobSave.then(function (job) {
        saveProducts(job).then(function () {
            res.json(job);
        });
    });
});

module.exports = router;