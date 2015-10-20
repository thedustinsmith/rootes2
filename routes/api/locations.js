var express = require('express');
var router = express.Router();
var db = require('../../db/index');

router.get('/', function (req, res, next) {
    db.Locations.query({
        where: {
            IsRemoved: 0
        }
    }).fetch().done(function (locations) {
        res.json(locations.toJSON());
    });
});

router.get('/:id', function (req, res, next) {
    db.Location.where('id', req.params.id).fetch().done(function (loc) {
        res.json(loc.toJSON());
    });
});

router.post('/', function (req, res, next) {
    db.Location.forge(req.body).save().done(function (loc) {
        res.json(loc.toJSON());
    });
});

router.put('/:id', function (req, res, next) {
    new db.Location({
        'id': req.params.id
    }).save(req.body).done(function (loc) {
        res.json(loc.toJSON());
    });
});

router.delete('/:id', function (req, res, next) {
    new db.Location({
        'id': req.params.id
    }).save({
        IsRemoved: true,
        DateRemoved: new Date()
    }).done(function (){
        res.send({});
    });
});

module.exports = router;
