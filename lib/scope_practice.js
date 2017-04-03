// global scope
const a = 1

if (true) {
  // local scope of 1st nested if statement
  const b = 2

  if (true) {
    // local scope of 2nd nested if statement
    const c = 3;
    console.log('a is ', a)
    console.log('b is ', b)
    console.log('c is ', c)
  }
  // local scope of 1st nested if statement
  console.log('a is ', a)
  console.log('b is ', b)
  console.log('c is ', c)
}
// global scope
console.log('a is ', a)
console.log('b is ', b)
console.log('c is ', c)
