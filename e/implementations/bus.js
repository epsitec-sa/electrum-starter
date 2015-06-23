'use strict';

var P = require ('presentation');

var dispatch = function dispatch (obj, action) {
  console.dir (obj.props);
  P.render (action);
};

var notify = function notify (obj, value, ...states) {};

module.exports = {
  dispatch: dispatch,
  notify: notify
};
