'use strict';

var P = require ('presentation');

var dispatch = function dispatch (obj, id) {
  if (obj.props.activity) {
    P.render (obj, id);
  }

  if (obj.props.cmd) {
    P.run (obj, id);
  }

  if (id) {
    P.doAction (obj, id);
  }
};

var notify = function notify (obj, value, ...states) {};

module.exports = {
  dispatch: dispatch,
  notify: notify
};
