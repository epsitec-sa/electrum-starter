'use strict';

var React = require ('react');
var A     = require ('arc');

var Button         = A.Button;
var FlexBox        = A.FlexBox;
var Link           = A.Link;
var Menu           = A.Menu;
var Paper          = A.Paper;
var SidePanel      = A.SidePanel;
var Text           = A.Text;

exports.display = {
  mode: 'fullscreen'
};

exports.view = (
  <div>
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
        <Button id="1" text="Login" activity="Login" />
        <Button id="2" text="News" activity="News" />
      </FlexBox>
    </Paper>
  </div>
);
