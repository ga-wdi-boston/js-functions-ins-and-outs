'use strict';

const max = function () {
  let result = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (result < arguments[i]) {
      result = arguments[i];
    }
  }
  return result;
};

const maxOfArray = function (arr) {
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  return result;
};

const addProperty = function (obj, prop, val) {
  // obj.prop = val; // Wrong!
  // obj['prop'] = val; // Because this!

  obj[prop] = val;
};


module.exports = {
  max,
  maxOfArray,
  addProperty
};
