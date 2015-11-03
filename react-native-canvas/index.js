/**
 * Created by Yonee on 2015/11/3.
 */

'use strict';

var {
    PropTypes,
    requireNativeComponent,
    NativeModules,
    } = require('react-native');


var iface = {
    name: 'CanvasView',
    propTypes: {
        src: PropTypes.string,
        numberOfLines: PropTypes.number,
        scaleX: PropTypes.number,
        scaleY: PropTypes.number,
        translateX: PropTypes.number,
        translateY: PropTypes.number,
        rotation: PropTypes.number,
    }
};
module.exports = requireNativeComponent('RCTCanvasView', iface);
/*
var RCTCanvasModule  = NativeModules.RCTCanvasModule;

var Canvas = React.createClass({
    drawLine: function(startX,  startY,  stopX,  stopY){
        RCTCanvasModule.drawLine(startX,startY,stopX,stopY);
    },

    render :function(){
        return RCTCanvasModule.getView();
    }
});
module.exports = Canvas;*/
