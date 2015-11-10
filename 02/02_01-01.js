require(['esri/map'], function(Map) {
    var map = new Map('map', {
        basemap: 'streets',
        center: [-105.2519, 40.0274],
        zoom: 11
    });
});
