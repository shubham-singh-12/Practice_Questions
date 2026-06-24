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





// ========================================================================================================================================================
// 8. Store your favorite movie's name in a variable called favoriteMovie.
let favouriteMovie = "Fast & Furious";

console.log((`Favourite name: ${favouriteMovie}`));





// ========================================================================================================================================================
// 9. Declare a variable weight and log it to the console.
let weight = 23.9;

console.log(`Weight: ${weight} Kg`);





// ========================================================================================================================================================
// 10. Take two variables holding numbers and exchange their contents.
let number_1 = 6;
let number_2 = 2;

console.log(`==================== Before Exchange ====================`);
console.log(`Number 1: ${number_1} \nNumber 2: ${number_2}`);

number_1 = number_1 + number_2;
number_2 = number_1 - number_2;

number_1 = number_1 - number_2;

console.log(`==================== After Exchange ====================`);
console.log(`Number 1: ${number_1} \nNumber 2: ${number_2}`);





// ========================================================================================================================================================
// 11. Declare a constant GRAVITY and display its value.
const gravity = 9.81;

console.log(`Earth gravity: ${gravity}`);





// ========================================================================================================================================================
// 12. Declare a variable named middleName with no assigned value and log it.
let middleName;

console.log(middleName);





// ========================================================================================================================================================
// 13. Set a variable balance to 200 and reduce it by 45.
let balancedValue = 200;
let reducedValue = 45;

console.log(`Final result: ${balancedValue - reducedValue}`);





// ========================================================================================================================================================
// 14. Declare three separate variables for hours, minutes, and seconds.
let currentHours = new Date().getHours();
let currentminutes = new Date().getMinutes();
let currentSeconds = new Date().getSeconds();

console.log(`Current Time: ${currentHours}:${currentminutes}:${currentSeconds}`);