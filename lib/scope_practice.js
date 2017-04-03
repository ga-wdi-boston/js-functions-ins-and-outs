// global scope
let a = 1;

if (true) {
  // local scope of 1st nested if statement
  let b = 2;

  if (true) {
    // local scope of 2nd nested if statement
    let c = 3;
  }
  // local scope of 1st nested if statement

}
// global scope
