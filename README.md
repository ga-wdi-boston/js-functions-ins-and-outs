![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

- [JavaScript Basics 2](https://github.com/ga-wdi-boston/js-basics-2)

## Reading

These reading are to help familiarize you with the subject matter.  You are not expected to follow all of descriptions. Please skip over `ES6` and/or `ECMAScript 6` portions of the documentation.

- MDN Glossary entry for
 [Array](https://developer.mozilla.org/en-US/docs/Glossary/array)
- MDN Glossary entry for [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object)
- MDN [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) reference
- MDN entry for [Object initializers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- MDN [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) reference
- MDN [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) reference

## Introduction

JavaScript function argument and return values

## Objectives

By the end of this lesson, students should be able to:

- Create and invoke functions that take an arbitrary number of arguments
- Create and invoke functions that take object as arguments
- Create and invoke functions that take functions as arguments
- Create and invoke functions that return objects

## "Ins & Outs"

### "Ins"

#### Zero or more arguments

JavaScript provides a mechanism to handle arguments not in the function definition: the `arguments` object.  This object is referred to as `array like` and is available within any function.  We'll examine how this object is used by creating some seemingly parameterless functions.


##### Demo

```js
var product = function product() {

};
```

##### Code along

```js
var max = function max() {

};
```

Could we accomplish something similar using a single argument?

#### Reference types as arguments

Reference types passed as arguments can be modified within the functions.

##### Demo

```js
var aryTimes2 = function aryTimes2() {

};
```

##### Code along

```js
var addProperty = function addProperty() {

};

var transform = function transform(value, predicate, mutator) {

};
```

### "Outs"

#### Reference types as returns values

Reference type literals returned from functions create new instances of the type.

##### Demo

```js
var createArray = function createArray() {

};
```

##### Code along

```js
var mergeConfig = function mergeConfig() {

};

var createAdder = function createAdder() {

};
```

## Assessment

Please follow the instructions at https://github.com/ga-wdi-boston/js-functions-ins-and-outs-assessment
