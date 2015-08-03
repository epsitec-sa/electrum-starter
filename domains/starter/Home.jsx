'use strict';

var React = require ('react');
var A     = require ('arc');

var AppCanvas      = A.AppCanvas;
var Button         = A.Button;
var FlexBox        = A.FlexBox;
var GoogleFontHack = A.GoogleFontHack;
var Link           = A.Link;
var Menu           = A.Menu;
var Paper          = A.Paper;
var SidePanel      = A.SidePanel;
var Text           = A.Text;

module.exports = (
  <AppCanvas>
    <GoogleFontHack />
    <SidePanel side="bottom" overlay={false}>
      <Paper kind="header">
        <Text>Paper in side panel</Text>
      </Paper>
    </SidePanel>
    <Menu title="Electrum Starter">
      <Link id="start" />
    </Menu>
    <Paper kind="full">
      <FlexBox direction="row">
        <Text kind="title">Hello from the FlexBox</Text>
        <Button id="Login" activity="Login"/>
      </FlexBox>
    </Paper>
  </AppCanvas>
);
