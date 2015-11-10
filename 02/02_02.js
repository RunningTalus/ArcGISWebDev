require([
        'esri/map',
        'esri/graphic',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleLineSymbol',
        'dojo/_base/Color'                 // Uses an [ R, G, B ] values in an array to assign a color
        ], function( Map, Graphic, SimpleMarkerSymbol, SimpleLineSymbol, Color ) {

    var map = new Map( 'map', {        // Creates instance of new map
        basemap: 'national-geographic',
        autoResize: true,
        center: [-105.2519, 40.0274],
        zoom: 10
    });

    map.on('click', function(e) {  // Listens for click event on map
        var mapPoint = e.mapPoint, // Stores the location of the click event
            symbolSize = 24,                                   // Specifies size of Graphic
            lineColor = new Color( [ 255, 0, 0 ] ),            // Specifies RED outline color
            fillColor = new Color( [ 255, 255, 0, 0.75 ] ),    // Specifies fill color, last value in [] is transparency
            line = new SimpleLineSymbol( SimpleLineSymbol.STYLE_SOLID, lineColor, 3 ),  // Creates outline
            sms = new SimpleMarkerSymbol( SimpleMarkerSymbol.STYLE_CIRCLE, symbolSize, line, fillColor ),  // Creates SimpleMarkerSymbol to represent graphic on map
            graphic = new Graphic( mapPoint, sms );
        map.graphics.add( graphic );   // Adds Graphic to GraphicsLayer in map
    });
});