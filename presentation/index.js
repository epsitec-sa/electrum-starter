'use strict';

var Reflux = require ('reflux');

var activityStack = [];
var Actions = Reflux.createActions ([
  'render',
  'run',
  'doAction'
]);

Actions.render.listen ((obj, activity) => {
  if (activityStack.length && activityStack[0].activity === activity) {
    return;
  }
  activityStack.unshift ({
    component: obj,
    activity:  activity
  });
});

Actions.run.listen ((obj, cmd) => {

});

Actions.doAction.listen ((obj, action) => {
  if (action === 'Dismiss') {
    activityStack.shift ();
    Actions.render (activityStack[0].component, activityStack[0].activity);
  }
});

module.exports = Actions;
