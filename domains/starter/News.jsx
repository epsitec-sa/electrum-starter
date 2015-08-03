'use strict';

var React = require ('react');
var A     = require ('arc');

var Paper        = A.Paper;
var Text         = A.Text;

exports.display = {
  mode: 'modeless'
};

exports.view = (
  <Paper kind="full">
    <Text>Message of the day</Text>
  </Paper>
);
