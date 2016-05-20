'use strict';

const arrayTransform = function arrayTransform(array, predicate, mutator) {

  for(let i = 0; i < array.length; i++){
    if(predicate(array[i])){
      array[i] = mutator(array[i]);
    }
  }
  return array;
};

// Test - should get 212, 32
let outPut = arrayTransform([100, 0],
  function(value){
    if(value > 50){
      return true;
    } else{
      return false;
    }},
    function(value){
      return value*(9/5)+32;});
console.log('test: should be 212, 0: ', outPut);
