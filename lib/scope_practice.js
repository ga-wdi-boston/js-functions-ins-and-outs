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
