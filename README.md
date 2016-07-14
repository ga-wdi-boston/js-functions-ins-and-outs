![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

-   [JavaScript Reference Types](https://github.com/ga-wdi-boston/js-reference-types)

## Required Reading

[JavaScript Functions - "Ins & Outs" - Study](https://github.com/ga-wdi-boston/js-functions-ins-and-outs-study#readme)

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

## Introduction

JavaScript function argument and return values

## Objectives

By the end of this lesson, students should be able to:

-   Create and invoke functions that take an arbitrary number of arguments
-   Create and invoke functions that take reference types as arguments
-   Create and invoke functions that return objects
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

};
```

##### Code along - `arguments`

```js
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
const arrayTimes2 = function arrayTimes2() {

};
```

##### Code along - reference type arguments

```js
const addProperty = function addProperty() {

};
```

Functions are valid arguments.

```js
const transform = function transform(value, predicate, mutator) {

};
```

### "Outs"

#### Reference types as returns values

Reference type literals returned from functions create new instances of the
 type specified.

##### Demo - return new arrays

```js
const createArray = function createArray() {

};
```

##### Lab - reference types as arguments and return values

Write a function that takes an array, a predicate, and a mutator. It should
create a new array to hold all of either an existing element in the array or the
transformed value for that element for which the predicate returns true. The
replacement value should be the result of invoking the mutator on the existing
element.

```js
const arrayTransform = function arrayTransform() {

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
const memoFactory = function memoFactory() {

};

```

##### Code along - return new functions

Functions returned from functions generate a closure.
Closures provide great utility.

```js
const counterFactory = function counterFactory() {

};

```

## Additional Resources

-   [Array slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
-   [Array shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
-   [Function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
