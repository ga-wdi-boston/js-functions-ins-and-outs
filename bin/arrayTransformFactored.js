'use strict';

const arrayTransform = function arrayTransform(array, predicate, mutator) {

  let resultArray = [];

  for(let i = 0; i < array.length; i++){
    let element = array[i];
    if(predicate(element)){
      resultArray.push(mutator(element));
    } else {
      resultArray.push(element);
    }
  }
  return resultArray;
};

const pred = function(value){
  if(value >= 60){
    return true;
  } else{
    return false;
  }
};

const mut = function(value){
  return value/60;
};

// Test - should get 212, 32
let outPut = arrayTransform([120, 60, 30, 15],pred,mut);
console.log('test: should be 2, 1, 30, 15: ', outPut);
