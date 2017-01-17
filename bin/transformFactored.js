'use strict';

// Define function
const transform = function transform(value, predicate, mutator) {
  let result = value;
  if(predicate(value)){
    result = mutator(value);
  }
  return result;
};

const pred = function(value){
  if(value > 50){
    return true;
  } else{
    return false;
  }};

const mut = function(value){
  return value*(9/5)+32;};

// Test - should get 212
let outPut = transform(100, pred, mut);
console.log('test: should be 212: ', outPut);
