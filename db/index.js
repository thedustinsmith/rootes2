var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data/rootes.db'
    }
});

var bookshelf = require('bookshelf')(knex);
var product = require('./product')(bookshelf);
var grower = require('./grower')(bookshelf);

module.exports = {
    Product: product.model,
    Products: product.collection,
    Grower: grower.model,
    Growers: grower.collection
};