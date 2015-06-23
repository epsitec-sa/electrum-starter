'use strict';

var Electrum = require ('electrum');
var Radium   = require ('radium');

var Wrapper = {
  wrap:           (obj) => {return obj;},
  getElectrumApi: () => require ('./implementations/api.js'),
  getElectrumBus: () => require ('./implementations/bus.js')
};

var e = new Electrum (Radium, Wrapper);

e.buildTheme = function (theme) {
  theme = theme || 'default-theme';

  var Theme = require ('./themes/' + theme + '.js');

  e.typo = {
    font: Theme.contentFontFamily
  };
  e.palette     = Theme.palette;
  e.colors      = Theme.colors;
  e.transitions = Theme.transitions;
  e.spacing     = Theme.spacing;
  e.shapes      = Theme.shapes;
};

e.buildTheme ('dark-theme');

module.exports = e;
