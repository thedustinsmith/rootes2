module.exports = function (bookshelf) {
    var Product = bookshelf.Model.extend({
        tableName: 'Product'
    });

    return Product;
};