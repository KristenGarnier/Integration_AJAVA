$(document).ready(function () {

    var height = windowSet();
    if($('.inscription')){
        inscriptionSet(height);
    }

    // quand on redimensionne la fenetre
    $(window).resize(function(){
        height = windowSet();
        if($('.inscription')){
            inscriptionSet(height);
        }
    })

});

// fonction pour centrer le formulaire d'inscription [non  terminée ]
function inscriptionSet(height){
    var $inscription = $('.inscription');

    var elementH = $inscription.height();
    var finalHeight = height/2 - elementH/2;

    $inscription.css({
        marginTop: finalHeight
    });
}


// fonction pour que le fond occupe toute la page
function windowSet(){
    var height = $(window).height();
    $('body').height(height);

    return height;
}