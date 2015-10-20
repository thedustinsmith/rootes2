module.exports = function (bookshelf) {
    var Location = bookshelf.Model.extend({
        tableName: 'Location'
    });

    var Locations = bookshelf.Collection.extend({
        model: Location
    }, 
    {
        findByGrower: function (g) {
            return this.query({ 
                where: {
                    GrowerID: g 
                }
            }).fetch();
        }
    });

    return {
        model: Location,
        collection: Locations
    };
};