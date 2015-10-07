var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './data/rootes.db'
    }
});

var bookshelf = require('bookshelf')(knex);

var Product = require('./product')(bookshelf);

module.exports = {
    Product: Product
};