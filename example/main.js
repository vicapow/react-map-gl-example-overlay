'use strict';

var document = require('global/document');
var Immutable = require('immutable');
var window = require('global/window');
var React = require('react');
var ReactDOM = require('react-dom');
var r = require('r-dom');
var MapGL = require('react-map-gl');
var Overlay = require('../src/overlay.react');
var Attribution = require('./attribution.react');
var assign = require('object-assign');
var rasterTileStyle = require('raster-tile-style');
var tileSource = '//tile.stamen.com/toner/{z}/{x}/{y}.png';
var mapStyle = rasterTileStyle([tileSource]);
var locations = require('example-cities');

var App = React.createClass({

  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 0,
        longitude: 0,
        mapStyle: Immutable.fromJS(mapStyle),
        zoom: 1,
        isDragging: false
      }
    };
  },

  componentDidMount: function componentDidMount() {
    window.addEventListener('resize', function onResize() {
      this.setState({
        viewport: assign({}, this.state.viewport, {
          width: window.innerWidth,
          height: window.innerHeight
        })
      });
    }.bind(this));
  },

  _onChangeViewport: function _onChangeViewport(viewport) {
    this.setState({viewport: assign({}, this.state.viewport, viewport)});
  },

  render: function render() {
    return r.div([
      r(MapGL, assign({}, this.state.viewport, {
        onChangeViewport: this._onChangeViewport
      }), [
        r(Overlay, assign({}, this.state.viewport, {locations: locations}))
      ]),
      r(Attribution)
    ]);
  }
});
document.body.style.margin = 0;
var reactContainer = document.createElement('div');
document.body.appendChild(reactContainer);
ReactDOM.render(r(App), reactContainer);
