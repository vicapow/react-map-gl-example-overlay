'use strict';

var React = require('react');
var window = require('global/window');
var r = require('r-dom');
var SVGOverlay = require('react-map-gl/src/overlays/svg.react');
var assign = require('object-assign');

module.exports = React.createClass({

  displayName: 'ExampleOverlay',

  propTypes: {
    locations: React.PropTypes.array.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    latitude: React.PropTypes.number.isRequired,
    zoom: React.PropTypes.number.isRequired,
    isDragging: React.PropTypes.bool.isRequired
  },

  render: function render() {
    return r(SVGOverlay, assign({}, this.props, {
      redraw: function redraw(opt) {
        return r.g(this.props.locations.map(function map(location) {
          var pixel = opt.project([location.longitude, location.latitude]);
          return r.circle({
            cx: pixel[0],
            cy: pixel[1],
            r: 10,
            style: {
              fill: 'rgba(231, 76, 60, 0.4)',
              pointerEvents: 'all',
              cursor: 'pointer'
            },
            onClick: function onClick() {
              window.location.href = 'https://en.wikipedia.org' + location.wiki;
            }
          });
        }));
      }.bind(this)
    }));
  }
});
