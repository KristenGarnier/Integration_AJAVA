function next(origin, dest, lat, lng) {
    var map = new GMaps({
        div: '#map-canvas',
        lat: 45.5667 || lat,
        lng: 5.9333 || lng,
        zoom: 6
    });


    if (origin !== undefined && dest !== undefined) {
       map.drawRoute({
            origin: origin,
            destination: dest,
            travelMode: 'driving',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });

        //Etape
        map.drawRoute({
            origin: origin,
            destination: [45.40, 5.23],
            travelMode: 'driving',
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });
    }
}

next();


$('.weather').click(function () {
    console.log('click');
    origin = [45.50, 5.59];
    dest = [45.55, 5.9333];
    next(origin, dest, origin[0], origin[1]);
});

