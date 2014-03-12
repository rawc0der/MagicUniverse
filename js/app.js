define([
  'jquery', 
  'underscore', 
  'backbone',
  'controllers/MyController',
  'modules/MyModule',
  'transit',
  'jq-drag',
  'io'


], function($, _, Backbone, MyController, MyModule, transit, jqDrag, io){
  /**
   * Main Application File Module
   * Store Components inside this object for global refs handles
   * @type {[type]}
   */
  var App = {};

  _.extend ( App, {
    /**
     * Application Entry point. It is called the first time DOM finishes loading
     * @return {[function]} 
     */
      initialize: function(){

        console.log('Development App::initialize', this);

        this.Controller.start();

        return this;

      },

      initializeDrawingPad: function(){
        var io = window.io;
        App.socket = io.connect()

        // Draw Function
        App.draw = function(data) {
            if (data.type == "dragstart") {
                App.ctx.beginPath()
                App.ctx.moveTo(data.x,data.y)
            } else if (data.type == "drag") {
                App.ctx.lineTo(data.x,data.y)
                App.ctx.stroke()
            } else {
                App.ctx.stroke()
                App.ctx.closePath()
            }
        }

        // Draw from other sockets
        App.socket.on('draw', App.draw)

        // Bind click and drag events to drawing and sockets.
        $(function() {
            App.ctx = $('canvas')[0].getContext("2d")
            $('canvas').live('drag dragstart dragend', function(e) {
                offset = $(this).offset()
                data = {
                    x: (e.clientX - offset.left),
                    y: (e.clientY - offset.top),
                    type: e.handleObj.type
                }
                App.draw(data) // Draw yourself.
                App.socket.emit('drawClick', data) // Broadcast draw.
            })
        })
      },

      Controller: MyController,

      CustomModule: MyModule

    });

  return App;
});