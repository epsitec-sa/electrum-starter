'use strict';

var concat = function (array, ...items) {
  items.forEach (x => {
    if (x) {
      if (Array.isArray (x)) {
        concat (array, ...x);
      } else {
        array.push (x);
      }
    }
  });
  return array;
};

var getText = function (obj, what) {
  return obj.props.id;
};

var getStyle = function (obj, ...styles) {
  var theme = obj.theme || {};
  return concat (
    [],
    theme.base,
    obj.props.kind ? theme[obj.props.kind] : null
  );
};

var getState = function (obj, what) {
  return null;
};

var setState = function (obj, ...states) {
  return null;
};

var getValue = function (obj) {
  return null;
};

var setValue = function (obj, value, ...states) {};

module.exports = {
  getState: getState,
  setState: setState,
  getStyle: getStyle,
  getText: getText,
  getValue: getValue,
  setValue: setValue,
};
