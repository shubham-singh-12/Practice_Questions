// ====================================================================== Variables =======================================================================

// 1. Create a variable called `studentName` and store your name in it.
let studentName = "Shubham Singh";





// ========================================================================================================================================================
// 2. Create a variable `age` and print it.
let age = 24;
console.log(age);





// ========================================================================================================================================================
// 3. Create two variables and swap their values.
let firstVariable = 12;
let secondVariable = 24;

console.log("========== BEFORE SWAP ==========");
console.log("1st variable: ", firstVariable);
console.log("2nd variable: ", secondVariable);

firstVariable = secondVariable + firstVariable;
secondVariable = firstVariable - secondVariable;
firstVariable = firstVariable - secondVariable;

console.log();

console.log("========== AFTER SWAP ==========");
console.log("1st variable: ", firstVariable);
console.log("2nd variable: ", secondVariable);





// ========================================================================================================================================================
// 4. Create a constant variable for `PI` and print it.
const PI = 3.14;
console.log(PI);





// ========================================================================================================================================================
// 5. Declare a variable without assigning a value and print it.
let emptyVariable;
console.log(emptyVariable);





// ========================================================================================================================================================
// 6. Create a variable `score` and increase it by 10.
let score = 11;
score += 10;

console.log(score);





// ========================================================================================================================================================
// 7. Create three variables for first name, last name, and full name.
let firstName = "Shubham ";
let lastName = "Singh";

let fullName = firstName + lastName;
console.log(fullName);