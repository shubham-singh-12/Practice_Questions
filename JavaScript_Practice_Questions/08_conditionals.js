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

let userNumber_2 = 2;

if (userNumber_2 % 2 == 0) {
    console.log(`${userNumber_2} is Even.`);
} else {
    console.log(`${userNumber_2} is Odd.`);
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

let userNumber_7 = 10;

if (userNumber_7 % 3 == 0 && userNumber_7 % 5 == 0) {
    console.log(`${userNumber_7} is divisible by both 3 & 5.`)
} else if (userNumber_7 % 3 == 0 && userNumber_7 % 5 != 0) {
    console.log(`${userNumber_7} is divisible by 3 only.`)
} else {
    console.log(`${userNumber_7} is divisible by 5 only.`)
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

let firstNumber_10 = 4;
let secondNumber_10 = 5;

let operator_10 = "Plus";

switch (operator_10) {
    case "Add":
        console.log(firstNumber_10 + secondNumber_10);
        break;

    case "Subtract":
        console.log(firstNumber_10 - secondNumber_10);
        break;

    case "Divide":
        console.log(firstNumber_10 / secondNumber_10);
        break;

    case "Multiply":
        console.log(firstNumber_10 * secondNumber_10);
        break;

    case "Modulus":
        console.log(firstNumber_10 % secondNumber_10);
        break;

    default:
        console.log(`${operator_10} does not exists, please choose correct Operator.`);
}





// ========================================================================================================================================================
// 11. Print the day name based on a number (1–7).

let userNumber_11 = 8;

switch (userNumber_11) {
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





// ========================================================================================================================================================
// 13. Determine if a given number is zero, positive, or negative.
let givenNumber_13 = 0;

if (givenNumber_13 > 0) {
    console.log(`${givenNumber_13} is Positive.`);
} else if (givenNumber_13 < 0) {
    console.log(`${givenNumber_13} is Negative.`)
} else {
    console.log(`${givenNumber_13} is Zero.`)
};





// ========================================================================================================================================================
// 14. Determine if a number is divisible by 3.
let givenNumber_14 = 15;

if (givenNumber_14 % 3 === 0) {
    console.log(`${givenNumber_14} is divisible by 3.`)
} else {
    console.log(`${givenNumber_14} is not divisible by 3.`)
};





// ========================================================================================================================================================
// 15. Determine if someone qualifies for a student discount (age under 25).
let studentAge = 25;
let studentDiscount = 25;
let productPrice = 2000;
let productFinalPrice;


if (studentAge <= 25) {
    productFinalPrice = (productPrice) - (productPrice * (studentDiscount / 100));
} else {
    productFinalPrice = productPrice;
};

console.log(`Product final price: ₹ ${productFinalPrice}/-`);





// ========================================================================================================================================================
// 16. Identify the bigger of two given marks.
let firstMarks_16 = 54;
let secondMarks_16 = 43;

if (firstMarks_16 > secondMarks_16) {
    console.log(`${firstMarks_16} is bigger than ${secondMarks_16}`);
} else {
    console.log(`${firstMarks_16} is smaller than ${secondMarks_16}`);
};





// ========================================================================================================================================================
// 17. Identify the biggest of three given marks.
let firstNumber_17 = 23;
let secondNumber_17 = 45;
let thirdNumber_17 = 34;

if (firstNumber_17 >= secondNumber_17 && firstNumber_17 >= thirdNumber_17) {
    console.log(`${firstNumber_17} is Greater than ${secondNumber_17} & ${thirdNumber_17}`);
} else if (secondNumber_17 >= firstNumber_17 && secondNumber_17 >= thirdNumber_17) {
    console.log(`${secondNumber_17} is Greater than ${firstNumber_17} & ${secondNumber_17}`);
} else {
    console.log(`${thirdNumber_17} is greater.`);
}





// ========================================================================================================================================================
// 18. Determine if a given year falls in the 21st century.
let givenYear_18 = 2017;

if (givenYear_18 >= 2000 && givenYear_18 < 2100) {
    console.log(`${givenYear_18} falls in the 21st century.`);
} else {
    console.log(`${givenYear_18} does not falls in the 21st century.`);
};





// ========================================================================================================================================================
// 19. Determine if a number is divisible by both 4 and 6.
let givenNumber_19 = 7;

if (givenNumber_19 % 4 === 0 && givenNumber_19 % 6 === 0) {
    console.log(`${givenNumber_19} is divisible by both 4 and 6.`);
} else if (givenNumber_19 % 4 === 0 && givenNumber_19 % 6 !== 0) {
    console.log(`${givenNumber_19} is divisible by 4 only.`);
} else if (givenNumber_19 % 4 !== 0 && givenNumber_19 % 6 === 0){
    console.log(`${givenNumber_19} is divisible by 6 only.`);
} else {
    console.log(`${givenNumber_19} is neither divisible by 4 nor 6.`);
};





// ========================================================================================================================================================
// 20. Build a fuel efficiency rating system:
// - 20+ km/l → Excellent
// - 15–19 km/l → Good
// - 10–14 km/l → Average
// - below 10 → Poor
let fuelConsumption_20 = 20;

if (fuelConsumption_20 < 10) {
    console.log(`${fuelConsumption_20} Km/l -> Poor`);
} else if (fuelConsumption_20 >= 10 && fuelConsumption_20 < 15) {
    console.log(`${fuelConsumption_20} km/l -> Average`);
} else if (fuelConsumption_20 >= 15 && fuelConsumption_20 <20) {
    console.log(`${fuelConsumption_20} km/l -> Good`);
} else {
    console.log(`${fuelConsumption_20} km/l -> Excellent`);
};





// ========================================================================================================================================================
// 21. Determine whether a given letter is uppercase or lowercase.
let givenLetter_21 = "A";

if (givenLetter_21 >= "A" && givenLetter_21 <= "Z") {
    console.log(`${givenLetter_21} is Uppercase.`);
} else if (givenLetter_21 >= "a" && givenLetter_21 <= "z"){
    console.log(`${givenLetter_21} is Lowercase.`);
} else {
    console.log(`${givenLetter_21} is either Number or Symbol`);
}





// ========================================================================================================================================================
// 22. Build a basic unit converter (km to miles, kg to lbs, etc.) using switch.
let givenNumber_22 = 23;
let userChoiceConverter = "Km-miles";

switch(userChoiceConverter) {
    case "Km-miles":
        console.log(`${givenNumber_22} Km into miles: ${(givenNumber_22 * 0.621371).toFixed(4)}`);
        break;

    case "Kg-lbs":
        console.log(`${givenNumber_22} Kb into lbs: ${(givenNumber_22 * 2.20462).toFixed(4)}`);
        break;

    case "ltr-gallon":
        console.log(`${givenNumber_22} ltr into gallon: ${(givenNumber_22 * 0.264172).toFixed(4)}`);
        break;

    default:
        console.log(`Please enter correct unit.`);
};





// ========================================================================================================================================================
// 23. Output the season name based on a month number.
let monthName_23 = "January";

switch (monthName_23){
    case "December":
    case "January":
    case "February":
        console.log(`${monthName_23} is Winter Season.`);
        break;

    case "March":
    case "April":
    case "May":
        console.log(`${monthName_23} is Spring Season.`);
        break;

    case "June":
    case "July":
    case "August":
        console.log(`${monthName_23} is Summer Season.`);
        break;

    case "September":
    case "October":
    case "November":
        console.log(`${monthName_23} is Autumn Season.`);
        break;

    default:
        console.log(`${monthName_23} is incorrect`)
};






// ========================================================================================================================================================
// 24. Verify that an entered PIN equals "4321".
let enteredPIN_24 = 4321;

if (enteredPIN_24 === 4321) {
    console.log(`${enteredPIN_24} is equals to 4321`);
} else {
    console.log(`${enteredPIN_24} is not equals to 4321`);
}