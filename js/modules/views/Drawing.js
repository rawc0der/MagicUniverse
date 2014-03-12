define([
 'underscore',
 'backbone',
 'widget',
 'text!templates/drawingTemplate.html'
], function(_, Backbone, Widget, drawingTemplate ){
	
	/**
	 *  Extend Backbone View with custom attributes
	 */
	var Drawing = Widget.extend({
		config: {
			time: true,
			debug:false
		},
		/**
		 *  xhr resource for fetching
		 */
		drawingUrl: null,
		artistInfo: null,
		imgClass: null,

		template: {
			templateString: drawingTemplate,
			templateDataObject: {
				drawingUrl: 'loaders/3.GIF',
				artistInfo: ' Available Spot ',
				imgClass: 'loader'
			}
		},
		// subviewsContainer: '.drawingFrame',
		// subviews: null,
		viewOptions: ['drawingUrl', 'artistInfo', 'imgClass'],
		initialize: function(){
			Widget.prototype.initialize.call(this);
			console.log('Drawing:: init');
		},
		buildDrawing: function(newDrawingUrl, newArtistInfo, newImgClass){
			var opts = _.defaults(this.template.templateDataObject, {
				drawingUrl: newDrawingUrl,
				artistInfo: newArtistInfo,
				imgClass: newImgClass

			});
			this.setTemplate(opts);
		}

	});

	return Drawing;

});