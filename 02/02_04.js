require( [
        'dojo/dom', //Uses dom module to select HTML element by id
        'dojo/on',
        'esri/map',
        'esri/layers/FeatureLayer'
        ], function( dom, on, Map, FeatureLayer ) {

    var map = new Map( 'map', {
        basemap: 'streets',
        autoResize: true,
        center: [ -118.2095, 34.086 ],
        zoom: 12
    });

    var featureLayer = new FeatureLayer( 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/la_county_labor_centroid/FeatureServer/0' );

    featureLayer.setDefinitionExpression( 'TOTAL_POP > 2500' );

    map.addLayer( featureLayer );

    on( dom.byId( 'population' ), 'change', function( e ) { // Listens for change event on select menu
        var population = e.target.value;
        var definitionExpression = 'TOTAL_POP > ' + population;
        featureLayer.setDefinitionExpression( definitionExpression ); // Builds new definition expression based on newly selected value in drop-down
    });

});