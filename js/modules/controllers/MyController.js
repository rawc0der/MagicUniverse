define([
	'underscore', 
	'backbone',
	'views/Frame',
	'widget',
	'd3'
], function(_, Backbone, SiteFrame, Widget, d3){
	/**
	 * Controller Object responsible for View construction and application event flow
	 * @type {[Object]}
	 */
	var MyController = _.extend( {}, Backbone.Events );
	/**
	 * Define application logic here, by extending the Controller
	 */
	_.extend( MyController, {
		/**
		 * Function called immediately after App Initialize 
		 */
		start: function(){

			console.log('Controller::Start  --> define logic');		
			var siteFrame = new SiteFrame({});
			siteFrame.renderTo( $('#page_wrapper'), true );
			d3.select("body").style("background-color", "black");
			d3.select("h2").style("color", "white");

		} // end start

	});

	return MyController;

});