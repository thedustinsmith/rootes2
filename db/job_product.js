module.exports = function (bookshelf) {
    var Job_Product = bookshelf.Model.extend({
        tableName: 'Job_Product'
    });

    var Job_Products = bookshelf.Collection.extend({
        model: Job_Product
    }, 
    {// static methods
        
    });

    return {
        model: Job_Product,
        collection: Job_Products
    };
};