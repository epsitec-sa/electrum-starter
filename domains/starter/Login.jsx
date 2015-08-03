'use strict';

var React = require ('react');
var A     = require ('arc');

var AppCanvas    = A.AppCanvas;
var DialogWindow = A.DialogWindow;
var LabelField   = A.LabelField;
var Paper        = A.Paper;
var Button       = A.Button;

module.exports = (
  <AppCanvas>
    <DialogWindow z-index={1}>
      <Paper>
        <LabelField id="blabla">Blabla</LabelField>
        <Button cmd="DoLogin" />
      </Paper>
    </DialogWindow>
  </AppCanvas>
);
