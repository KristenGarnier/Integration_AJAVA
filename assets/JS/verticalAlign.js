
$(document).ready(function(){
    verticalAlign();
    $(window).resize(function(){
        verticalAlign();
    });
});

function verticalAlign(){
    $('.vertical-align').each(function(){
        var parent = $(this).parent().height() / 2;
        var elem = $(this).height() / 2;

        var final = parent - elem;

        console.log(final);

        $(this).css({
            'marginTop': final
        });
    });
}

