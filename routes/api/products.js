var express = require('express');
var router = express.Router();
var db = require('../../db/index');

router.get('/', function (req, res, next) {
    db.Products.query({
        where: { 
            IsRemoved: 0 
        }
    }).fetch().done(function (products) {
        console.log('here');
        res.json(products.toJSON());
    });
});

router.get('/:id', function (req, res, next) {
    db.Product.where('id', req.params.id).fetch().done(function (product) {
        res.json(product.toJSON());
    });
});

router.post('/', function (req, res, next) {
    db.Product.forge(req.body).save().done(function (product) {
        res.json(product.toJSON());
    });
});

router.put('/:id', function (req, res, next) {
    new db.Product({
        'id': req.params.id
    }).save(req.body).done(function (product) {
        res.json(product.toJSON());
    });
});

router.delete('/:id', function (req, res, next) {
    new db.Product({
        'id': req.params.id
    }).save({
        IsRemoved: true,
        DateRemoved: new Date()
    }).done(function (){
        res.send({});
    });
});

module.exports = router;
