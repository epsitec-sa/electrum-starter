'use strict';

var Reflux = require ('reflux');

var activityStack = [];
var Actions = Reflux.createActions ([
  'render',
  'run',
  'doAction',
  'startActivity'
]);

Actions.startActivity.listen ((obj, activityId) => {
  if (activityStack.length && activityStack[0].activityId === activityId) {
    return;
  }
  activityStack.unshift ({
    component: obj,
    activityId:  activityId
  });

  Actions.render (activityStack);
});

Actions.run.listen ((obj, cmd) => {

});

Actions.doAction.listen ((obj, action) => {
  if (action === 'Dismiss') {
    activityStack.shift ();
    Actions.render (activityStack);
  }
});

module.exports = Actions;
