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
var job = require('./job')(bookshelf);
var jobprod = require('./job_product')(bookshelf);

module.exports = {
    Product: product.model,
    Products: product.collection,
    Grower: grower.model,
    Growers: grower.collection,
    Applicator: applicator.model,
    Applicators: applicator.collection,
    Location: location.model,
    Locations: location.collection,
    Job: job.model,
    Jobs: job.collection,
    Job_Product: jobprod.model,
    Job_Products: jobprod.collection
};