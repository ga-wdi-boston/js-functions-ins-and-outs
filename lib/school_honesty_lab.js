'use strict'

// student one
const studentOne = {
  name: 'Mike',
  cheated: true,
  score: 100
}

// student two
const studentTwo = {
  name: 'Bernard',
  cheated: false,
  score: 90
}

// students array
const students = [studentOne, studentTwo]

// function that takes 25 points away from student
// a callback function that is passed as argument to runCheatingScript();
const deductForCheating = function (student) {
  student.score = student.score - 25
}

// write a callback that can be passed to runCheatingScript()
// it should have a parameter for a student object
// and should +5 to their score
const addForHonesty = function () {

}

// the function should accept an array of students
// and two callback functions
const runCheatingScript = function () {
  // loop through the students array and check who cheated

    // if they cheated or not
    // then pass them as an argument to the correct callback

}

// the function should get passed an array of students
// and two callback functions
runCheatingScript()

module.exports = {
  students,
  runCheatingScript
}
