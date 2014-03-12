/**
 * Configure application modules paths
 */
require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'library/min/jquery',
	    underscore: 'library/min/underscore',
	    backbone: 'library/min/backbone',
	    templates: 'modules/templates',
	    controllers: 'modules/controllers',
	    models: 'modules/models',
	    views: 'modules/views',
	    modules: 'modules',
	    widget: 'modules/views/widget-0.7',
	    transit: 'library/min/jquery.transit.min',
	    text:'library/text',
	    d3: 'library/d3.v3.min',
	    'jq-drag':'library/jquery.event.drag',
	    // 'io': '../node/lib/socket.io'
	    // soyutils: 'library/googleClosure/soyutils'
	},
	shim: {
		"d3": {exports:"d3"},
		// "io": {exports:"io"}
	}
});
/**
 * Load main App module
 */
require([
	'app',
	'd3',

], function(App, d3, jqDrag, io){ 
	window.d3 = d3 || {};
	/**
	 *  Initialize application when DOM finishes loading
	 */
	$(function(){

		window.App = App.initialize();


	});

});