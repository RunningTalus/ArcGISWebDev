require( [
    'dojo/dom', // Helper module to search elements in HTML. Uses dom module to select HTML element by ID
    'dojo/on',
    'dojo/_base/array', // Helper Module to work with []
    'dojo/_base/Color', // Assigns colors to Graphic
    'esri/map',         // Creates an instance of a map
    'esri/tasks/query', // Defines parameters to perform searches
    'esri/tasks/QueryTask', // Queries a map service
    'esri/symbols/SimpleMarkerSymbol' // Defines how a Graphic looks on the map
], function( dom, on, array, Color, Map, Query, QueryTask, SimpleMarkerSymbol ) {
    var map = new Map('map', {
        basemap: 'streets',
        autoResize: true,
        center: [ -118.2095, 34.0866 ],
        zoom: 10
    }),

    url = 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/la_county_labor_centroid/FeatureServer/0',  // Specifies the service to use
    markerSymbol = new SimpleMarkerSymbol( SimpleMarkerSymbol.STYLE_SQUARE, 10, null, new Color( [ 50, 50, 255 ] ));   // Manually defines symbology to describe what results look like

    function onQuerySuccess( featureSet ) {                        // Feature set is a collection of geographic data, geometryType and features
        map.graphics.clear();
        array.forEach( featureSet.features, function( feature ) {  // features contains Graphic features that represent the result of your Query
            feature.setSymbol( markerSymbol );                     // Sets symbology of how results are displayed
            map.graphics.add( feature );
        });
    }

    function onError( error ) {
        console.error( 'An error occurred in the query: ', error );
    }

    on( dom.byId( 'population' ), 'change', function( e ) {              // Listens for change event on select menu
        var population = e.target.value;
        if ( population.length > 0 ) {
            var queryTask = new QueryTask( url );                        // QueryTask uses a Query Object to define the criteria to perform the task.
            var query = new Query();
            query.where = 'TOTAL_POP > ' + population;                   // Where statement defines criteria for the query.
            query.returnGeometry = true;                                 // returns the x, y, coords of the census tracts
            queryTask.execute( query ).then( onQuerySuccess, onError );  // Executes QueryTask using Query; passes it to functions to handle results or error.
        }
    });
});