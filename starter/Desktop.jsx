'use strict';

var React = require ('react');
var A     = require ('arc');
var P     = require ('presentation');

var AppCanvas      = A.AppCanvas;
var WindowsManager = A.WindowsManager;

var Desktop = React.createClass ({
  componentWillMount: function () {
    P.startActivity (this, this.props.activityId);
    P.render.listen ((activityStack) => {
      this.refs.wm.clearViewers ();

      activityStack.forEach ((entry) => {
        this.refs.wm.addViewer (this.props.activities[entry.activityId]);
      });

      this.forceUpdate ();
    });
  },

  render: function () {
    return (
      <WindowsManager ref="wm"/>
    );
  }
});

module.exports = Desktop;
