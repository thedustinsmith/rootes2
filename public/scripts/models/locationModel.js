(function (models, collections) {

    var Location = Backbone.Model.extend({

        // urlRoot: '/api/locations',
        idAttribute: 'ID'
    });

    var Locations = Backbone.Collection.extend({
        model: Location,
        url: '/api/locations',

        initialize: function (o) {
            if (o && o.growerID) {
                this.url = '/api/growers/' + o.growerID + '/locations';
            }
        }
    });

    models.Location = Location;
    collections.Locations = Locations;
    
})(app.models, app.collections);