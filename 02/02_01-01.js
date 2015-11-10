require(['esri/map'], function(Map) {
    var map = new Map('map', {
        autoResize: true,                          // Default value is true, resizes map when you resize the browser
        basemap: 'national-geographic',            // hybrid, satellite, topo, gray, oceans, national-geographic
        center: [-105.2519, 40.0274],              // Center Long, Lat
        /* LOD: , */                               // Level of Detail is a combination of Level, Scale, Resolution
        logo: false,                               // Default is true, sets the Esri logo on the map
        nav: false,                                // Default is true
        /* scale: , */                              // Sets the initial scale fo the map when it first starts up
        slider: false,                             // False, doesn't display navigation tools
        zoom: 11                                   // Sets the initial zoom level
    });
});
