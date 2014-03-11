define([
 'underscore',
 'backbone',
 'widget',
 'text!templates/DrawingTemplate.html'
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
				drawingUrl: null,
				artistInfo: null,
				imgClass: null
			}
		},
		// subviewsContainer: '.drawingFrame',
		// subviews: null,
		viewOptions: ['drawingUrl', 'artistInfo', 'imgClass'],
		initialize: function(){
			Widget.prototype.initialize.call(this);
			console.log('Drawing:: init', this);
		},
		buildDrawing: function(newDrawingUrl, newArtistInfo, newImgClass){
			this.setTemplate({
				drawingUrl: newDrawingUrl,
				artistInfo: newArtistInfo,
				imgClass: newImgClass

			});
		}

	});

	return Drawing;

});