(function ($) {
  $.fn.closestData = function (d) {
    return this.closest('[data-' + d + ']').data(d);
  };

  $.fn.populateForm = function (data) {
    var $form = this;
    $form.find(':input').val('');
    Object.keys(data).forEach(function (k) {
        $form.find('[name=' + k + ']').val(data[k]);
    });
  };

  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
})(jQuery);

(function (global) {

    var bs = Backbone.View.extend({

        events: {
            'click .entity-edit': 'entityEdit',
            'click .entity-remove': 'entityRemove',
            'click .entity-edit-cancel': 'entityEditCancel',
            'click .entity-add': 'entityAdd',
            'submit .bs-form-wrap form': 'formSubmit'
        },

        formSubmit: function (ev) {
            var $form = $(ev.currentTarget),
                id = $form.data('id'),
                model = this.collection.get(id),
                data = $form.serializeObject();

            $form.data('id', null);
            if (!id) {
                model = this.collection.create(data);
            }
            else {
                model.set(data).save();
            }

            this.renderList();
            this.$el.removeClass('edit');
            return false;
        },

        entityAdd: function (ev) {
            this.$el.addClass('edit');
            this.$formWrap.populateForm({});
        },

        entityEditCancel: function (ev) {
            ev.preventDefault();
            this.$el.removeClass('edit');
        },

        entityEdit: function (ev) {
            var id = $(ev.currentTarget).closestData('id'),
                m = this.collection.get(id),
                $form = this.$formWrap.find('form');

            this.$el.addClass('edit');
            $form.data('id', id);
            $form.populateForm(m.toJSON());
        },

        entityRemove: function (ev) {
            var id = $(ev.currentTarget).closestData('id');
            this.collection.get(id).destroy();
        },

        renderForm: function () {
            var self = this;
            self.$formWrap.html(Mustache.render(self.formTemplate));
        },

        renderList: function () {
            var self = this,
                html = Mustache.render(self.listTemplate, {
                    Items: self.collection.toJSON()
                });

            self.$listWrap.html(html);
        },

        renderStructure: function () {
            this.$el.addClass('backscratcher');
            this.$listWrap = $('<div class="bs-list-wrap bs-page" />').appendTo(this.$el);
            this.$formWrap = $('<div class="bs-form-wrap bs-page" />').appendTo(this.$el);
            this.$el.append('<div')
        },

        initialize: function (o) {
            var self = this;
            self.listTemplate = o.listTemplate;
            self.formTemplate = o.formTemplate;
            self.collection = o.collection;

            self.renderStructure();
            self.renderForm();

            self.collection.fetch().done(_.bind(self.renderList, self));
        }
    });

    global.Backbone.Backscratcher = bs;

})(window);