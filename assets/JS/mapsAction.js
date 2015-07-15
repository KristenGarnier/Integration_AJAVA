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
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + dest[0] + '&lon=' + dest[1]+'&units=metric&lang=fr', function(data){
        console.log(data);
        var temperature = data.main.temp_max.toString().slice(0,2);
        var description = data.weather[0].description;
        var icon = data.weather[0].main.toLowerCase();
        $('#temperature').html(temperature);
        $('#description').html(description);
        console.log(temperature, description);
    });
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
