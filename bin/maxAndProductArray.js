'use strict';

// const ins = require('../lib/ins.js');
//
// const max = ins.max;

// Max
const max = function max(arrayOfNumbers){

  let maximum = arrayOfNumbers[0];

  for(let i = 1; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] > maximum){
      maximum = arrayOfNumbers[i];
    }
  }

  return maximum;
};

// Product
const product = function max(arrayOfNumbers){

  let result = 1;

  for(let i = 0; i < arrayOfNumbers.length; i++){
    result *= arrayOfNumbers[i];
  }

  return result;
};

// Test
let arrayOfNumbers = [1,3,-2];
console.log('arrayOfNumbers: ', arrayOfNumbers);
console.log('max is: ', max(arrayOfNumbers));
console.log('product is: ', product(arrayOfNumbers));
