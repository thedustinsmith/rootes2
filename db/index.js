var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data/rootes.db'
    }
});

var bookshelf = require('bookshelf')(knex);
var product = require('./product')(bookshelf);
var grower = require('./grower')(bookshelf);
var applicator = require('./applicator')(bookshelf);
var location = require('./location')(bookshelf);

module.exports = {
    Product: product.model,
    Products: product.collection,
    Grower: grower.model,
    Growers: grower.collection,
    Applicator: applicator.model,
    Applicators: applicator.collection,
    Location: location.model,
    Locations: location.collection
};