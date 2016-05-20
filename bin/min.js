'use strict';

// const ins = require('../lib/ins.js');
//
// const max = ins.max;

const max = function max(){

  let maximum = arguments[0];

  for(let i = 1; i < arguments.length; i++){
    if(arguments[i] < maximum){
      maximum = arguments[i];
    }
  }

  return maximum;
};

// Test
console.log(max(1,3,2,45,2));
