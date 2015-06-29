$(".arrow-nav").on('click', function () {
    var pos = $(this).data('pos');
    console.log(pos);


    if (pos === 'right') {
        console.log('yo');
        navigationTrajet('right');
    } else {
        console.log('ya');
        navigationTrajet('left');
    }

    //console.log(test);
});

function navigationTrajet(arrow) {
    var height = $(".voyages").parent().height();
    $(".voyages").parent().css({
        'minHeight': height
    });
    var $selector;
    $(".voyages").each(function () {
        if (!$(this).hasClass('cache')) {
            $selector = $(this);
        }
    });
    $selector.fadeOut("slow", function () {
        if (arrow == 'right') {
            $selector.addClass('cache');
            var $elem = $selector.next();
            $elem.show('fast', function(){
                verticalAlign();
            });
            $elem.removeClass('cache');
            if ($elem.next().empty()) {
                $(".arrow-nav").each(function () {
                    if ($(this).data('pos') === arrow) {
                        $(this).children().hide('slow');
                    }
                });
            }
            $('.arrow-left:hidden').show('fast');
        }
        else {
            $selector.addClass('cache');
            var $elem = $selector.prev();
            $elem.show('fast', function(){
                verticalAlign();
            });
            $elem.removeClass('cache');
            if ($elem.prev().empty()) {
                $(".arrow-nav").each(function () {
                    if ($(this).data('pos') === arrow) {
                        $(this).children().hide('slow');
                    }
                });
            }
            $('.arrow-right:hidden').show('fast');

        }
    });
}

// TODO Appliquer match height sur les éléments
