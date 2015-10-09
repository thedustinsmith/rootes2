var express = require('express');
var router = express.Router();
var db = require('../../db/index');

router.get('/', function (req, res, next) {
    db.Growers.query({
        where: {
            IsRemoved: 0
        }
    }).fetch().done(function (growers) {
        res.json(growers.toJSON());
    });
});

router.get('/:id', function (req, res, next) {
    db.Grower.where('id', req.params.id).fetch().done(function (grower) {
        res.json(grower.toJSON());
    });
});

router.post('/', function (req, res, next) {
    db.Grower.forge(req.body).save().done(function (grower) {
        res.json(grower.toJSON());
    });
});

router.put('/:id', function (req, res, next) {
    new db.Grower({
        'id': req.params.id
    }).save(req.body).done(function (grower) {
        res.json(grower.toJSON());
    });
});

router.delete('/:id', function (req, res, next) {
    new db.Grower({
        'id': req.params.id
    }).save({
        IsRemoved: true,
        DateRemoved: new Date()
    }).done(function (){
        res.send({});
    });
});

module.exports = router;
