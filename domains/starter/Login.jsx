'use strict';

var React = require ('react');
var A     = require ('arc');

var AppCanvas    = A.AppCanvas;
var DialogWindow = A.DialogWindow;
var LabelField   = A.LabelField;
var Paper        = A.Paper;
var Button       = A.Button;

exports.display = {
  mode: 'modal'
};

exports.view = (
  <Paper kind="full">
    <LabelField>User</LabelField>
    <Button kind="accept" cmd="DoLogin" text="Login" />
    <Button action="Dismiss" text="Cancel" />
  </Paper>
);
