module.exports = function (bookshelf) {
    var Applicator = bookshelf.Model.extend({
        tableName: 'Applicator'
    });
    var Applicators = bookshelf.Collection.extend({
        model: Applicator
    });

    return {
        model: Applicator,
        collection: Applicators
    };
};