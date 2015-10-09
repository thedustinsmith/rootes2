(function (models, collections) {

    var Product = Backbone.Model.extend({

        urlRoot: '/api/products',
        idAttribute: 'ID'
    });

    models.Product = Product;

    var ProductCollection = Backbone.Collection.extend({
        model: Product,
        url: '/api/products'
    });
    
    collections.Products = ProductCollection;
})(app.models, app.collections);