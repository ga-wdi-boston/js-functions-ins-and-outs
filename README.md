![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

- [JavaScript Reference Types](https://github.com/ga-wdi-boston/js-reference-types)

## Required Reading

[JavaScript Functions - "Ins & Outs" - Study](https://github.com/ga-wdi-boston/js-functions-ins-and-outs-study#readme)

## Introduction

JavaScript function argument and return values

## Objectives

By the end of this lesson, students should be able to:

- Create and invoke functions that take an arbitrary number of arguments
- Create and invoke functions that take objects as arguments
- Create and invoke functions that return objects
- Create and invoke functions that take functions as arguments
- Create and invoke functions that return functions

## "Ins & Outs"

### "Ins"

#### Zero or more arguments

JavaScript provides a mechanism to handle arguments not in the function definition: the `arguments` object.  This object is referred to as `array like` and is available within any function.  We'll examine how this object is used by creating some seemingly parameterless functions.


##### Demo

```js
const product = function product() {

};
```

##### Code along

```js
const max = function max() {

};
```

Could we accomplish something similar using a single argument?

##### Lab

Write functions that take an array and return a product or max.

#### Reference types as arguments

Reference types passed as arguments can be modified within the functions.

##### Demo

```js
const arrayTimes2 = function arrayTimes2() {

};
```

##### Code along

```js
const addProperty = function addProperty() {

};
```

Functions are valid arguments.

```js
const transform = function transform(value, predicate, mutator) {

};
```

##### Lab

Write a function that takes an array and a function and replaces each element of the array with the result of invoking the function with the existing element.

```js
const arrayTransform = function arrayTransform() {

};
```

### "Outs"

#### Reference types as returns values.

Reference type literals returned from functions create new instances of the type.

#### Demo

```js
const createArray = function createArray() {

};
```

#### Code along

```js
const createPerson = function createPerson(givenName, surname, bornOn, height, weight, eyeColor) {

};
```

#### Demo

Functions returned from functions generate a closure.  Closures provide great utility.

```js
const counterFactory = function counterFactory() {

};

```

## Additional Resources

- [Array slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- [Function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
