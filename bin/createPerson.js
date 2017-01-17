'use strict';

// Don't do this. JS is object oriented, not functional. Use a constructor
// function and a prototype.

const createPerson = function createPerson(givenName, surname, bornOn, height, weight, eyeColor) {

  let person = {
    givenName: givenName,
    surname: surname,
    bornOn: bornOn,
    height: height,
    weight: weight,
    eyeColor: eyeColor
  };

  return person;
};

// Test
let myPerson = createPerson('Misha', 'Herscu', '02-06-1991', 70, 205, 'hazel');
console.log(myPerson);
