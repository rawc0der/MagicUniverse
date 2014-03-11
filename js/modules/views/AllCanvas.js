define([
 'underscore',
 'backbone',
 'widget',
 'views/Spot'
], function(_, Backbone, Widget, Spot ){
	
	/**
	 *  Extend Backbone View with custom attributes
	 */
	var AllCanvasView = Widget.extend({
		config: {
			time: true,
			debug:false
		},
		template: {
			templateString: '<div class="canvas"> <div class="canvasSubviews"></div> </div>',
			templateDataObject: {}
		},
		subviewsContainer: '.canvasSubviews',
		subviews: [],
		initialize: function(){
			Widget.prototype.initialize.call(this);
			console.log('Canvas:: init');
			this.buildInitialSpots({});
		},
		buildInitialSpots: function(opts){
			console.log('Canvas:: buildInitialSpots');
			for (var i = 0; i < 32; i++) {
				this.addSubview(new Spot({}));
			}
			this.renderSubviews();
		},

	});

	return AllCanvasView;

});