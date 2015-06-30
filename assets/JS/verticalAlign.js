
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

        if($(window).width() <= 991 && $(this).data('pos')){ // Vérification si l'attribut est une flèche ( seul les fleches ont des data-pos)

            $(this).css({
                'marginTop': 0
            });

        }else{
            $(this).css({
                'marginTop': final
            });
        }

    });
}

