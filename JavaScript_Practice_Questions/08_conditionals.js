// ===================================================================== CONDITIONALS =====================================================================

// 1. Check whether a number is positive or negative.

let userNumber = 5;

if (userNumber > 0) {
    console.log(`${userNumber} is Positive.`);
} else if (userNumber < 0) {
    console.log(`${userNumber} is Negative`);
} else {
    console.log(`${userNumber} is Zero`);
}





// ========================================================================================================================================================
// 2. Check whether a number is even or odd.

let userNumber = 2;

if (userNumber % 2 == 0) {
    console.log(`${userNumber} is Even.`);
} else {
    console.log(`${userNumber} is Odd.`);
}





// ========================================================================================================================================================
// 3. Check whether a person is eligible to vote.

let userAge = 17;

if (userAge >= 18) {
    console.log(`User is Eligible to vote.`);
} else {
    console.log(`User is NOT Eligible to vote.`);
}





// ========================================================================================================================================================
// 4. Find the largest among two numbers.

let firstNumber = 30;
let secondNumber = 30;

if (firstNumber > secondNumber) {
    console.log(`${firstNumber} > ${secondNumber}`);
} else if (firstNumber === secondNumber) {
    console.log(`${firstNumber} == ${secondNumber}`);
} else {
    console.log(`${secondNumber} > ${firstNumber}`);
}





// ========================================================================================================================================================
// 5. Find the largest among three numbers.

let number_1 = 6;
let number_2 = 2;
let number_3 = 4;

if (number_1 > number_2 && number_1 > number_3) {
    console.log(`${number_1} > ${number_2} & ${number_3}`);
} else if (number_2 > number_1 && number_2 > number_3) {
    console.log(`${number_2} > ${number_1} & ${number_3}`)
} else {
    console.log(`${number_3} > ${number_1} & ${number_2}`);
}





// ========================================================================================================================================================
// 6. Check whether a year is a leap year.

let givenYear = 2014;

if ((givenYear % 4 == 0 && givenYear % 1400 != 0) || (givenYear % 400 == 0)) {
    console.log(`${givenYear} is a Leap year.`)
} else {
    console.log(`${givenYear} is not a Leap Year.`)
}





// ========================================================================================================================================================
// 7. Check whether a number is divisible by both 3 and 5.

let userNumber = 10;

if (userNumber % 3 == 0 && userNumber % 5 == 0) {
    console.log(`${userNumber} is divisible by both 3 & 5.`)
} else if (userNumber % 3 == 0 && userNumber % 5 != 0) {
    console.log(`${userNumber} is divisible by 3 only.`)
} else {
    console.log(`${userNumber} is divisible by 5 only.`)
}





// ========================================================================================================================================================
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

let studentMarks = 86;

if (studentMarks > 90) {
    console.log(`Student got A+`);
} else if (studentMarks > 75) {
    console.log(`Student got B`);
} else if (studentMarks > 50) {
    console.log(`Student got C`);
} else {
    console.log(`Student Fail.`);
}





// ========================================================================================================================================================
// 9. Check whether a character is a vowel or consonant.

let userLetter = 'A';

if (userLetter == 'A' || userLetter == 'a' || userLetter == 'E' || userLetter == 'e' || userLetter == 'I' || userLetter == 'i' || userLetter == 'O' || userLetter == 'o' || userLetter == 'U' || userLetter == 'u') {
    console.log(`${userLetter} is Vowel.`);
} else {
    console.log(`${userLetter} is Consonant.`);
}





// ========================================================================================================================================================
// 10. Create a calculator using `switch` statement.

let firstNumber = 4;
let secondNumber = 5;

let operator = "Plus";

switch (operator) {
    case "Add":
        console.log(firstNumber + secondNumber);
        break;

    case "Subtract":
        console.log(firstNumber - secondNumber);
        break;

    case "Divide":
        console.log(firstNumber / secondNumber);
        break;

    case "Multiply":
        console.log(firstNumber * secondNumber);
        break;

    case "Modulus":
        console.log(firstNumber % secondNumber);
        break;

    default:
        console.log(`${operator} does not exists, please choose correct Operator.`);
}





// ========================================================================================================================================================
// 11. Print the day name based on a number (1–7).

let userNumber = 8;

switch (userNumber) {
    case (1):
        console.log(`Monday`);
        break;

    case (2):
        console.log(`Tuesday`);
        break;

    case (3):
        console.log(`Wednesday`);
        break;

    case (4):
        console.log(`Thursday`);
        break;

    case (5):
        console.log(`Friday`);
        break;

    case (6):
        console.log(`Saturday`);
        break;

    case (7):
        console.log(`Sunday`);
        break;

    default:
        console.log(`Please Choose correct number.`);
}





// ========================================================================================================================================================
// 12. Check whether a username is `"admin"` and password is `"1234"`.

let username = "admin";
let userPassword = 1234;

if (username === "admin" && userPassword === "1234") {
    console.log(`Welcome User!!!`);
} else {
    console.log(`Either Username / Password is incorrect.`)
}