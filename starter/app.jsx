'use strict';

var React = require ('react');
var App   = require ('./desktop.jsx');

var renderApp = function () {
  React.render (
    <div>
      <App />
    </div>,
    document.body
  );
};

renderApp ();
