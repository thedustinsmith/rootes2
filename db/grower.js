module.exports = function (bookshelf) {
    var Grower = bookshelf.Model.extend({
        tableName: 'Grower'
    });
    var Growers = bookshelf.Collection.extend({
        model: Grower
    });

    return {
        model: Grower,
        collection: Growers
    };
};