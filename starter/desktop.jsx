'use strict';

var React = require ('react');
var A     = require ('arc');
var P     = require ('presentation');

var AppCanvas      = A.AppCanvas;
var Button         = A.Button;
var FlexBox        = A.FlexBox;
var GoogleFontHack = A.GoogleFontHack;
var Link           = A.Link;
var Menu           = A.Menu;
var Paper          = A.Paper;
var SidePanel      = A.SidePanel;
var Text           = A.Text;

var Desktop = React.createClass ({
  componentWillMount: function () {
    P.render.listen ((action) => {
      console.log ('forceUpdate ' + action);
      this.forceUpdate ();
    });
  },

  render: function () {
    return (
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
        <Paper kind="full" ref="content">
          <FlexBox direction="row">
            <Text kind="title">Hello from the FlexBox</Text>
            <Button id="starter" />
          </FlexBox>
        </Paper>
      </AppCanvas>
    );
  }
});

module.exports = Desktop;
