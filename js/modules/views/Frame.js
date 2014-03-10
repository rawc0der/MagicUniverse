define([
 'underscore',
 'backbone',
 'widget',
 'text!templates/frameTemplate.html'
], function(_, Backbone, Widget, frameTemplate){
	
	/**
	 *  Extend Backbone View with custom attributes
	 */
	var MagicUniverseFrame = Widget.extend({
		config: {
			time: true,
			debug:false
		},
		template: {
			templateString: frameTemplate,
			templateDataObject: {}
		},
		subviewsContainer: '.frameSubviews',
		subviews: [],

		initialize: function(){
			Widget.prototype.initialize.call(this);
			console.log("MagicUniverseFrame:: init");
		}

	});

	return MagicUniverseFrame;

});