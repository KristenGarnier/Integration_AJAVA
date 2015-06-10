$(document).ready(function () {
    var height = $(window).height();
    var $inscription = $('.inscription');
    $('body').height(height);
    var elementH = $inscription.height();
    var finalHeight = height/2 - elementH/2;

    $inscription.css({
        marginTop: finalHeight
    });
});