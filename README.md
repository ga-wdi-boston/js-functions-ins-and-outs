[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions - "Ins & Outs"

## Prerequisites

-   [JavaScript Reference Types](https://github.com/ga-wdi-boston/js-reference-types)
-   [JavaScript Functions - "Ins & Outs" - Study](https://github.com/ga-wdi-boston/js-functions-ins-and-outs-study#readme)

## Objectives

By the end of this talk, developers should be able to:

-   Use block scope to identify which variables are accessible in a function
-   Create and invoke functions that take an arbitrary number of arguments
-   Create and invoke functions that take reference types as arguments
-   Create and invoke functions that return reference types
-   Create and invoke functions that take functions as arguments
-   Create and invoke functions that return functions

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

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

The outer most scope is the `global scope` and all inner scopes are considered
`local scopes`.

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
  let x = 1  // what would happen if `var` were used instead?
  console.log(x)  // 1
  // When should we use `console` functions?
}
// global scope
console.log(x)  // ReferenceError: x is not defined
```

They are accessible to any inner scopes (child scopes).

```js
// global scope
let x = 1

if (true) {
  // local scope
  x = 2
  console.log(x)  // 2
}
// global scope
console.log(x)  // 2
```

But not to the scopes above them (parent scopes).

```js
// global scope
let x = 1

if (true) {
  // local scope
  let y = x
  console.log(y)  // 1
}
// global scope
console.log(x)  // 1
console.log(y)  // ReferenceError: y is not defined
```

Variables are not accessible from sibling scopes.

```js
if (true) {
  // local scope of 1st sibling
  let a = 1
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
const x = 1
console.log(x)  // 1

if (true) {
  // local scope
  const x = 2
  console.log(x)  // 2
}
// global scope
console.log(x)  // 1
```

So that means a variable declared in the global scope is accessible by all of
the scopes we create and a variable declared in a local scope is only
accessible to itself and its child scopes.

##### Code Along - `debugging variable scope`

```js
// global scope
let a = 1

if (true) {
  // local scope of 1st nested if statement
  let b = 2

  if (true) {
    // local scope of 2nd nested if statement
    let c = 3
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
while (true) { // don't run this
  let a = 1
  console.log(a) // 1
}
console.log(a) // ReferenceError: a is not defined
```

For Loops still have block scope even though the syntax is different.

```js
for (let i = 1; i < 2; i++) {
  console.log(i) // 1
}
console.log(i) // ReferenceError: i is not defined
```

Functions are another example of block scope.

```js
const anyFunction = function() {
  let a = 1
  console.log(a) // 1
}

console.log(a) // ReferenceError: a is not defined
```

The scope of our parameters are within the function block as well

```js
const print = function(a) {
  console.log(a)
}

print(1) // 1
console.log(a) // ReferenceError: a is not defined
```

#### Functions with 0 arguments

Some functions do not have parameters when they are defined and do not need
to be passed arguments when they are called.

```js
const printHello = function(){
  console.log("Hello World")
}

printHello()
```

#### Functions with 1 or more arguments

Some functions define 1 or more parameters and expect 1 or more arguments to be
passed when called.

```js
const subtract = function(num1, num2){
  return num1 - num2
}

subtract(2, 1) // 1
```

The order of the arguments matter.

```js
const subtract = function(num1, num2){
  return num1 - num2
}

subtract(1, 2) // -1
subtract(2, 1) // 1
```

The type of the arguments matter.

```js
const add = function(num1, num2){
  return num1 + num2
}

add(1, 2) // 3
add("cat", 1) // "cat1"
```

It is up to the developer to know the order and type of arguments a function
is expecting.

The arguments passed to a function can be any primitive data types or objects
which include objects, arrays, and functions.

```js
// array
const subtract = function(nums){
  return nums[0] - nums[1]
}

// number
const add = function(num1, num2){
  return num1 - num2
}

subtract( [2, 1] ) // 1
add( 2, 1 ) // 3
```

In Javascript a function can accept an unlimited number of arguments since
every function has an `arguments` object that is a mechanism to handle
arguments not in the function definition. This object is referred to as `array
like` and is available within any function. We'll examine how this object is
used by creating some seemingly parameterless functions.

##### Demo - `arguments`

```js
const print = function () {
  console.log(arguments[0])
}

print() // undefined
print("cat") // "cat"
print(100, 200) // 100
```

##### Code along - `arguments`

```js
// takes an arbitrary number of arguments (each arg
// should be a number), finds the largest one, and
// returns that member

const max = function () {

}
```

Could we accomplish something similar using a single argument?

##### Lab - single array argument

Write a function `maxOfArray` that takes an array of numbers and returns the
max.

#### Reference types as arguments

Reference types passed as arguments can be modified within the functions.

##### Demo - primitive data types as arguments

```js
let num = 1

const change = function (num) {
  num++
  console.log(num)
}

change(num) // 2
console.log(num) // 1
```

##### Demo - reference types as arguments - arrays

```js
let numbers = [1, 2, 3]

const change = function (numbers) {
  numbers.push(4)
  console.log(numbers)
}

change(numbers) // [1, 2, 3, 4]
console.log(numbers) // [1, 2, 3, 4]
```

##### Demo - reference types as arguments - objects

```js
let person = {
  name: "Mike",
  age: 100
}

const getOlder = function (person) {
  person.age++
  console.log(person.age)
}

getOlder(person) // 101
console.log(person.age) // 101
```

##### Code along - reference type arguments

```js

const addProperty = function addProperty(obj, prop, val) {
  // this function takes an object and adds a property
  // to it

}
```

#### Functions as arguments

Functions are valid arguments.
A function that is passed to another function is called a callback.

```js
const add = function (num1, num2){
  return num1 + num2
}

const subtract = function (num1, num2){
  return num1 - num2
}

const doMath = function (num1, num2, operation) {
  return operation(num1, num2)
}

doMath(2,1, add) // 3
doMath(2,1, subtract) // 1
```

What is a callback?
A callback is a function that is passed to another function.

### "Outs"


#### Primitive data types as returns values
Primitive data types returned are a new instance of the data type

```js
let num = 1

const increase = function (num) {
  num++
  return num
}

let newNum = change(num)
console.log(newNum) // 2
console.log(num) // 1
```

#### Reference types as returns values

Reference types declared within the function that are returned from functions
create new instances of that reference type.

```js
const createArray = function () {
  let result = []

  for (let i = 0; i < arguments.length; i++) {
    result[i] = arguments[i]
  }

  return result
}

let outcome = createArray(1,2,false,true)
console.log(outcome) // [1, 2, false, true]
console.log(result) // ReferenceError: result is not defined
```

 Reference types not declared within the function that are
 returned from functions are still the same reference type
 and not new instances.

 ```js
 let numbers = [1, 2, 3]

 const change = function (numbers) {
   numbers.push(4)
   return numbers
 }

 let newNumbers = change(numbers)
 console.log(newNumbers) // [1, 2, 3, 4]
 console.log(numbers) // [1, 2, 3, 4]

 newNumbers.push(5,6,7)
 console.log(newNumbers) // [1, 2, 3, 4, 5, 6, 7]
 console.log(numbers) // [1, 2, 3, 4, 5, 6, 7]
```

##### Lab - reference types as arguments and return values

Write a function that takes an array of developers and a callback function
Loops through the developers to check if they cheated and if they did then
applies the correct callback function to adjust their score.

```js
const developer = {
  name: "Mike",
  late: true,
  score: 100
}

const anotherDeveloper = {
  name: "Bernard",
  late: false,
  score: 90
}

const developers = [developer, anotherDeveloper]

const deductForCheating = function (developer) {
  developer.score = 0
}

// write a callback that can be passed to runLateScript
// it should have a parameter for a developer object
// to note the late submission was early in the course
const firstWeek = function () {
}

// the function should accept an array of developers
// and two callback functions
const runLateScript = function () {
  // loop through the developers array and check who was late
  // then pass them as an argument to the correct callback

}

// the function should get passed an array of developers
// and two callback functions
runLateScript()
```

##### Code along  - return new objects

```js
const createPerson = function (givenName, surname, bornOn, height, weight, eyeColor) {

}
```

#### Functions as returns values

Functions returned from functions generate a closure.
Closures provide great utility.

##### Demo - return new functions

```js
const memoFactory = function (memo) {
  let rememberMe = memo
  return function () {
    console.log(rememberMe)
  }
}

let memoOne = memofactory("Hello World")

memoOne() // "Hello World"
```

##### Code along - return new functions

Functions returned from functions generate a closure.
Closures provide great utility.

```js
const counterFactory = function(count) {

}
```

Combine the last two concepts and we can have a counting list of memos.

```js
const memoFactory = function (memo) {
  let total = 0

  return function () {
    total+= 1
    return total + ": " + memo
  }
}

const memo = memoFactory()

const entryMonday = memo("Monday was fun")
const entryTuesday = memo("I liked Tuesday")
const entryWednesday = memo("Ugh Wednesday")

console.log(entryMonday) // "1: Monday was fun"
console.log(entryTuesday) // "2: I liked Tuesday"
console.log(entryWednesday) // "3: Ugh Wednesday"
```

## Additional Resources
-   [Scope](http://www.2ality.com/2015/02/es6-scoping.html)
-   [Closure](https://www.youtube.com/watch?v=QyUFheng6J0)
-   [Closure](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
-   [Callbacks](https://www.impressivewebs.com/callback-functions-javascript/)
-   [Array slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
-   [Array shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
-   [Function call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
