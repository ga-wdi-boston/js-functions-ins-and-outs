![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

-   [JavaScript Reference Types](https://github.com/ga-wdi-boston/js-reference-types)

## Required Reading

[JavaScript Functions - "Ins & Outs" - Study](https://github.com/ga-wdi-boston/js-functions-ins-and-outs-study#readme)

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.

2.  Create a new branch, `training`, for your work.

3.  Install dependencies with `npm install`.

## Introduction

JavaScript function argument and return values

## Objectives

By the end of this lesson, students should be able to:

-   Create and invoke functions that take an arbitrary number of arguments
-   Create and invoke functions that take reference types as arguments
-   Create and invoke functions that return reference types
-   Create and invoke functions that take functions as arguments
-   Create and invoke functions that return functions

## "Ins & Outs"

### "Ins"

#### Zero or more arguments

JavaScript provides a mechanism to handle arguments not in the function
 definition: the `arguments` object.
This object is referred to as `array like` and is available within any function.
We'll examine how this object is used by creating some seemingly parameterless
 functions.

##### Demo - `arguments`

```js
const product = function product() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];
  }

  return result;
};
```

##### Code along - `arguments`

```js
// takes an arbitrary number of arguments (each arg
// should be a number), finds the largest one, and
// returns that member

const max = function max(1,2,3,4,5) {
  let result = null;

  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments [i];
  }
  return result;
};
```
1,2,3,4,5

Could we accomplish something similar using a single argument?

##### Lab - single array argument

Write functions that take an array and return a product or max.

#### Reference types as arguments

Reference types passed as arguments can be modified within the functions.

##### Demo - reference type arguments

```js
// Write a function that takes an array full of integers, doubles each value, and
// returns a new array with those values.
const arrayTimes2 = function arrayTimes2() {
  let result = [];

  for (let i = 0; i < arguments[0].length; i++) {
    result[i] = arguments[0][i] * 2;
  }

  return result;
};
```

##### Code along - reference type arguments

```js
const addProperty = function addProperty(obj, prop, val) {
  this.obj=obj;
  this.prop=prop;
  this.val=val;
  let result = [];

  for (let i = 0; i <arguments[0].length; i++) {
    result[i] = arguments[0][i] * 2;
  }

return result;
};
```

Functions are valid arguments.

```js
const transform = function (values, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it

};
```

### "Outs"

#### Reference types as returns values

Reference type literals returned from functions create new instances of the
 type specified.

##### Demo - return new arrays

```js
const createArray = function createArray() {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    result[i] = arguments[i];
  }

  return result;
};
```

##### Lab - reference types as arguments and return values

Write a function that takes an array, a predicate, and a mutator. It should
create a new array to hold all of either an existing element in the array or the
transformed value for that element for which the predicate returns true. The
replacement value should be the result of invoking the mutator on the existing
element.

```js
const arrayTransform = function arrayTransform(array, predicate, mutator) {
  // if the predicate is true, mutate the value, otherwise don't mutate it

};
```

##### Code along  - return new objects

```js
const createPerson = function createPerson(givenName, surname, bornOn, height, weight, eyeColor) {

};
```

#### Functions as returns values

Functions returned from functions generate a closure.
Closures provide great utility.

##### Demo - return new functions

```js
const memoFactory = function (rememberMe) {
  let memo = rememberMe;

  return function () {
    return memo;
  };
};
```

##### Code along - return new functions

Functions returned from functions generate a closure.
Closures provide great utility.

```js
const counterFactory = function(count) {

};
```

## Additional Resources

-   [Array slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
-   [Array shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
-   [Function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
