(function (models) {

    var Product = Backbone.Model.extend({

        urlRoot: '/api/products',
        idAttribute: 'ID'
    });

    models.Product = Product;
})(app.models);