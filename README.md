[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

-   [JavaScript Reference Types](https://github.com/ga-wdi-boston/js-reference-types)
-   [JavaScript Functions - "Ins & Outs" - Study](https://github.com/ga-wdi-boston/js-functions-ins-and-outs-study#readme)

## Objectives

By the end of this lesson, students should be able to:

-   Use block scope to identify which variables are accessible in a function
-   Create and invoke functions that take an arbitrary number of arguments
-   Create and invoke functions that take reference types as arguments
-   Create and invoke functions that return reference types
-   Create and invoke functions that take functions as arguments
-   Create and invoke functions that return functions

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.

2.  Create a new branch, `training`, for your work.

3.  Install dependencies with `npm install`.

## Introduction

JavaScript function argument and return values

## "Ins & Outs"

### "Ins"

#### Block scope

Scope refers to where variables and functions are accessible.

##### Demo - `global and local scope`

Block scope means our different scopes are defined by blocks `{ }`.

```js
// I am not inside a block
if (true) {
  // i am inside a block
}
// I am not inside a block
```

*NOT* objects but blocks.
```js
if (true) {
  // i am inside a block
}

let obj = {
  prop1: "I am not inside a block",
  prop2: "This is an object silly"
}
```

The outter most scope is the `global scope` and all inner scopes are considered `local scopes`.

```js
// global scope
if (true) {
  // local scope
}
// global scope
```

Variables are accessible within the scope they are declared.

```js
// global scope
if (true) {
  // local scope
  let x = 1;
  console.log(x);  // 1
}
// global scope
console.log(x);  // ReferenceError: x is not defined

```

They are accessible to any inner scopes (child scopes).

```js

// global scope
let x = 1;

if (true) {
  // local scope
  x = 2;
  console.log(x);  // 2
}
// global scope
console.log(x);  // 2

```

But not to the scopes above them (parent scopes).

```js

// global scope
let x = 1;

if (true) {
  // local scope
  let y = x;
  console.log(y);  // 1
}
// global scope
console.log(x);  // 1
console.log(y);  // ReferenceError: y is not defined
```

Variables are not accessible from sibling scopes.

```js

if (true) {
  // local scope of 1st sibling
  let a = 1;
  console.log(a) // 1
}

if (true) {
  // local scope of 2nd sibling
  console.log(a) // ReferenceError: a is not defined
}

```

Different scopes can have variables that are declared with the same name and
they do not conflict or know about each other.

```js

// global scope
const x = 1;
console.log(x);  // 1

if (true) {
  // local scope
  const x = 2;
  console.log(x);  // 2
}
// global scope
console.log(x);  // 1
```

So that means a variable declared in the global scope is accessible by all of
the scopes we create and a variable declared in a local scope is only accessible to
itself and its child scopes.

##### Code Along - `debugging variable scope`

```js
// global scope
let a = 1;

if (true) {
  // local scope of 1st nested if statement
  let b = 2;

  if (true) {
    // local scope of 2nd nested if statement
    let c = 3;
    console.log(a) // 1
    console.log(b) // 2
    console.log(c) // 3
  }

  // local scope of 1st nested if statement
  console.log(a) // 1
  console.log(b) // 2
  console.log(c) // ReferenceError: c is not defined
}

// global scope
console.log(a) // 1
console.log(b) // ReferenceError: b is not defined
console.log(c) // ReferenceError: c is not defined

```

Conditions are just 1 example of block scope.
Loops are another example of block scope.

```js

while (true) {
  let a = 1;
  console.log(a); // 1
}
console.log(a); // ReferenceError: a is not defined
```

For Loops still have block scope even though the syntax is different.

```js

for (let i = 1; i < 2; i++) {
  console.log(i); // 1
}
console.log(i); // ReferenceError: i is not defined
```

Functions are another example of block scope.

```js

const anyFunction = function() {
  let a = 1
  console.log(a); // 1
};

console.log(a); // ReferenceError: a is not defined

```

The scope of our parameters are within the function block as well

```js

const print = function(a) {
  console.log(a);
};

print(1); // 1
console.log(a); // ReferenceError: a is not defined

```

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

const max = function max() {

};
```

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
  // this function takes an object and adds a property
  // to it

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
