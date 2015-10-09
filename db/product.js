module.exports = function (bookshelf) {
    var Product = bookshelf.Model.extend({
        tableName: 'Product'
    });
    var Products = bookshelf.Collection.extend({
        model: Product
    });

    return {
        model: Product,
        collection: Products
    };
};