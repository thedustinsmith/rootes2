(function (global) {
    var $body = $('body');

    function executeScript (ev) {
        var pre = $(ev.currentTarget).siblings('pre'),
            code = pre.html();

        log('<script>' + code + '</script>');
        $body.append('<script>' + code + '</script>');
    }

    function showTab (t) {
        var $tab = $('.tab[data-tab="' + t + '"]');
        $tab.siblings().removeClass('active');
        $tab.addClass('active');
    }

    function tabClick (ev) {
        var $btn = $(ev.currentTarget),
            tab = $btn.data('tab');

        $btn.addClass('active');
        $btn.closest('li').siblings().find('button').removeClass('active');
        showTab(tab);
    }

    function init () {
        $('.tab-nav').on('click', 'button', tabClick);
        $('.tab-nav button').eq(0).trigger('click');
        $('.codebit').on('click', '.ex', executeScript);

        $('pre').each(function(){
            var $p = $(this);
            $p.after('<button class="ex"><i class="fa fa-terminal"></i></button>');
        });
    };

    global.admin = {
        init: init
    };
})(app);

(function (global, models, collections) {

    function init () {
        var productBs = new Backbone.Backscratcher({
            el: $('#product-entity-container'),
            listTemplate: $('#product-list-template').html(),
            formTemplate: $('#product-form-template').html(),
            collection: new collections.Products()
        });

        var growerBs = new Backbone.Backscratcher({
            el: $('#grower-entity-container'),
            listTemplate: $('#grower-list-template').html(),
            formTemplate: $('#grower-form-template').html(),
            collection: new collections.Growers()
        });
    }

    global.admin.forms = {
        init: init
    };
})(app, app.models, app.collections);