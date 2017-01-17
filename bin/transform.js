'use strict';

// Define function
const transform = function transform(value, predicate, mutator) {
  let result = value;
  if(predicate(value)){
    result = mutator(value);
  }
  return result;
};

// Test - should get 212
let outPut = transform(100,
  function(value){
    if(value > 50){
      return true;
    } else{
      return false;
    }},
    function(value){
      return value*(9/5)+32;});
console.log('test: should be 212: ', outPut);
