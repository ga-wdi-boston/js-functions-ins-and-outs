'use strict';

const addProperty = function addProperty(object,property,value){
  //
  // let result = arguments[0];
  // let prop = arguments[1];
  // let val = arguments[2];

  object[property] = value;

  return object;
};

// Tests
let sampleObject = {name: 'Chris Payne'};
console.log(sampleObject);
addProperty(sampleObject, 'heightInches', 74);
console.log(sampleObject);
