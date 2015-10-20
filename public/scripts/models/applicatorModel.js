(function (models, collections) {

    var Applicator = Backbone.Model.extend({

        urlRoot: '/api/applicators',
        idAttribute: 'ID'
    });

    var Applicators = Backbone.Collection.extend({
        model: Applicator,
        url: '/api/applicators'
    });

    models.Applicator = Applicator;
    collections.Applicators = Applicators;
    
})(app.models, app.collections);