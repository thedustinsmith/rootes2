var Job = (function (){
    var productTmpl,
        $productList;

    function addProductRow() {
        var ix = $productList.find('.dlp-item').length;
        $productList.append(Mustache.render(productTmpl, { 
            ix: ix,
            new: true
        }));
    }

    function initProducts() {
        productTmpl = $('#product-tmpl').html();
        $productList = $('#product-list');

        addProductRow();
        
        $productList.on('change', '.dlp-new select', function (ev) {
            var $sel = $(ev.currentTarget),
                $item = $sel.closest('.dlp-item');

            if ($sel.val() === "-1") {
                return;
            }
            $item.removeClass('.dlp-new');
            addProductRow();
        });
    }

    function init() {
        initProducts();
    }
    return {
        init: init
    };

})();