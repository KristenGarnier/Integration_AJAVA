function next(lat, lng, origin, dest, etape) {
    var map = new GMaps({
        div: '#map-canvas',
        lat: 45.5667 || lat,
        lng: 5.9333 || lng,
        zoom: 7
    });


    if (origin !== undefined && dest !== undefined && etape === undefined) {
        map.drawRoute({
            origin: origin,
            destination: dest,
            travelMode: 'driving',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });

    } else {
        if (origin !== undefined && dest !== undefined && etape !== undefined) {
            map.drawRoute({
                origin: origin,
                destination: etape,
                travelMode: 'driving',
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });

            map.drawRoute({
                origin: etape,
                destination: dest,
                travelMode: 'driving',
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });
        }

    }
}

next();



var origin;
var dest;
var etape;


$('#depart').change(function () {
    console.log($(this));
    origin = [$(this).find(':selected').data('lat'), $(this).find(':selected').data('long')];
    testNewCard();
});

$('#arrivee').change(function () {
    dest = [$(this).find(':selected').data('lat'), $(this).find(':selected').data('long')];
    testNewCard();
});
$('#etape').change(function () {
    etape = [$(this).find(':selected').data('lat'), $(this).find(':selected').data('long')];
    testNewCard();
});

function testNewCard() {
    console.log(origin, dest, etape);
    if (origin !== undefined && dest !== undefined && etape === undefined) {
        console.log('1');
        next(origin[0], origin[1], origin, dest);
    }else {
        if (origin !== undefined && dest !== undefined && etape !== undefined) {
            console.log('2');
            next(origin[0], origin[1], origin, dest, etape);
        }
    }
}

// On récupère les valeurs dans les champs,
// Si au moins point de départ et de destination son renseignés on affiche la route,
// on prend pour origine de la carte le point de départ
// Si une étape est définie, on réaffiche la carte

// une fois que le point d'arrivée est définit, on va chercher la météo dans le weather

// COORD LYON [45.75,4.85]
// COORD GRENOBLE [45.188529, 5.724523999999974]
// COORD CHAMBERY [45.564601, 5.917780999999991]