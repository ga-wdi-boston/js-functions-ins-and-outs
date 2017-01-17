'use strict';

const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {
  return {
    givenName,
    familyName,
    bornOn,
    height,
    weight,
    eyeColor,
  };
};

const counterFactory = function () {
  let count = 0;
  return function () {
    return count++;
  };
};

module.exports = {
  createPerson,
  counterFactory,
};
