'use strict';

const counterFactory = function counterFactory() {

  let count = 0;

  return function counter(){
    return count += 1;
  };
};

// Test
let chrisCounter = counterFactory();
let jeffCounter = counterFactory();

//let count = 0;
chrisCounter();
jeffCounter();
