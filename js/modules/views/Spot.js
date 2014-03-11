define([
 'underscore',
 'backbone',
 'widget',
 'views/Drawing'
], function(_, Backbone, Widget, Drawing ){
	
	/**
	 *  Extend Backbone View with custom attributes
	 */
	var SpotView = Widget.extend({
		config: {
			time: true,
			debug:false
		},
		drawing: null,
		events: {
			"click .spotFrame": function(evt){
				console.log('Spot: clicked', $(evt.currentTarget) )
			},
			"click .artist": function(evt){
				evt.stopPropagation();
				evt.preventDefault();
				console.log('Spot: clicked Artist', $(evt.currentTarget) )
			},
			"click .connect": function(evt){
				evt.preventDefault();
				evt.stopPropagation();
				console.log('Spot: clicked Connect', $(evt.currentTarget) )
			},
			"hover .spotFrame": function(evt){
				// console.log('Spot: hover', $(evt.currentTarget) )
				$(evt.currentTarget).toggleClass('hovered')
			}
		},
		template: {
			templateString: '<div class="spot"> <div class="spotFrame"></div> </div>',
			templateDataObject: {}
		},
		subviewsContainer: '.spotFrame',
		subviews: [],
		initialize: function(){
			Widget.prototype.initialize.call(this);
			console.log('Spot:: init', this);
			this.loadDrawing({});
		},
		loadDrawing: function(opts){
			console.log('Spot:: loadDrawing', this);
			var i = _.random(3, 3);
			var drawing = this.drawing = new Drawing({});
			drawing.renderTo( this.$el.find(this.subviewsContainer), true )
		},
		setUrl: function(opts){
			this.drawing.buildDrawing();
		},
	});

	return SpotView;

});