var express = require('express');
var router = express.Router();
var db = require('../../db/index');

router.get('/', function (req, res, next) {
    db.Applicators.query({
        where: {
            IsRemoved: 0
        }
    }).fetch().done(function (applicators) {
        res.json(applicators.toJSON());
    });
});

router.get('/:id', function (req, res, next) {
    db.Applicator.where('id', req.params.id).fetch().done(function (applicator) {
        res.json(applicator.toJSON());
    });
});

router.post('/', function (req, res, next) {
    db.Applicator.forge(req.body).save().done(function (applicator) {
        res.json(applicator.toJSON());
    });
});

router.put('/:id', function (req, res, next) {
    new db.Applicator({
        'id': req.params.id
    }).save(req.body).done(function (applicator) {
        res.json(applicator.toJSON());
    });
});

router.delete('/:id', function (req, res, next) {
    new db.Applicator({
        'id': req.params.id
    }).save({
        IsRemoved: true,
        DateRemoved: new Date()
    }).done(function (){
        res.send({});
    });
});

module.exports = router;
