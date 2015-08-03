'use strict';

var React = require ('react');
var A     = require ('arc');
var P     = require ('presentation');

var AppCanvas = A.AppCanvas;

var Desktop = React.createClass ({
  componentWillMount: function () {
    this._activity = this.props.activity;
    P.render (this, this._activity);
    P.render.listen ((obj) => {
      console.log ('forceUpdate of component: ' + obj);
      this._activity = obj.props.activity;
      this.forceUpdate ();
    });
  },

  renderActivity: function () {
    console.dir (this);
    return this.props.activities[this._activity];
  },

  render: function () {
    return this.renderActivity ();
  }
});

module.exports = Desktop;
