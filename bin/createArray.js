'use strict';

// Define function
const createArray = function createArray() {
  let result = [];

  for(let i = 0; i < arguments.length; i++){
    result.push(arguments[i]);
  }

  return result;
};

// Test
let inPuts = createArray(1, 'hi', true, 'test');
console.log(typeof(inPuts));
console.log(createArray(inPuts));
