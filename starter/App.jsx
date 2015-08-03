'use strict';

var React  = require ('react');
var domain = require ('../domains/starter/index.js');

var Desktop = require ('./Desktop.jsx');

var renderDesktop = function () {
  React.render (
    <Desktop activities={domain.activities} activityId="Home" />,
    document.body
  );
};

renderDesktop ();
