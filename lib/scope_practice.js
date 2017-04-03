// global scope
const a = 1

if (true) {
  // local scope of 1st nested if statement
  const b = 2

  if (true) {
    // local scope of 2nd nested if statement
    const c = 3
  }
  // local scope of 1st nested if statement
}
// global scope
