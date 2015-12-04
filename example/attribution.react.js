'use strict';

var React = require('react');
var r = require('r-dom');

var Attribution = React.createClass({

  displayName: 'Attribution',

  render: function render() {
    return r.div({
      style: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontFamily: 'Helvetica',
        background: 'white',
        padding: 4
      }
    }, [
      'Map tiles by ',
      r.a({href: 'http://stamen.com'}, 'Stamen'),
      ' under ',
      r.a({href: 'http://creativecommons.org/licenses/by/3.0'}, 'CC BY 3.0'),
      '. Data by ',
      r.a({href: 'http://openstreetmap.org'}, 'OpenStreetMap'),
      ', under ',
      r.a({href: 'http://www.openstreetmap.org/copyright'}, 'ODbL'),
      '.'
    ]);
  }
});

module.exports = Attribution;
