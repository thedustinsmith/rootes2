(function (models, collections) {

    var Grower = Backbone.Model.extend({

        urlRoot: '/api/growers',
        idAttribute: 'ID'
    });

    var Growers = Backbone.Collection.extend({
        model: Grower,
        url: '/api/growers'
    });

    models.Grower = Grower;
    collections.Growers = Growers;
    
})(app.models, app.collections);