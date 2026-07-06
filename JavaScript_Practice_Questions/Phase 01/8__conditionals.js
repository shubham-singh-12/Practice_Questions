// ========================================================================================================================================================
// ===================================================================== CONDITIONALS =====================================================================
// ========================================================================================================================================================

// 1. Check whether a number is positive or negative.
let givenNumber_1 = 0;

if (givenNumber_1 > 0) {
    console.log(`${givenNumber_1} is Positive.`); // For console only
} else if (givenNumber_1 < 0) {
    console.log(`${givenNumber_1} is Negative.`); // For console only
} else {
    console.log(`${givenNumber_1} is Zero`); // For console only
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 2. Check whether a number is even or odd.
let givenNumber_2 = 3;

if (givenNumber_2 % 2 === 0) {
    console.log(`${givenNumber_2} is Even.`); // For console only
} else {
    console.log(`${givenNumber_2} is Odd.`); // For console only
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 3. Check whether a person is eligible to vote.
let personAge_3 = 20.25;

if (personAge_3 >= 18) {
    console.log(`Person age is: ${personAge_3}, \nEligible to Vote.`); // For console only
} else {
    console.log(`Person age is: ${personAge_3}, \nNot eligible to Vote.`); // For console only
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 4. Find the largest among two numbers.
let firstNumber_4 = 45;
let secondNumber_4 = 6;

if (firstNumber_4 > secondNumber_4) {
    console.log(`${firstNumber_4} is Greater than ${secondNumber_4}`); // For console only
} else if (firstNumber_4 < secondNumber_4) {
    console.log(`${firstNumber_4} is less than ${secondNumber_4}`); // For console only
} else {
    console.log(`${firstNumber_4} equals to ${secondNumber_4}`); // For console only
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 5. Find the largest among three numbers.
let firstNumber_5 = 48;
let secondNumber_5 = 45;
let thirdNumber_5 = 700;

if (firstNumber_5 > secondNumber_5 && firstNumber_5 > thirdNumber_5) {
    console.log(
        `${firstNumber_5} if Greater than ${secondNumber_5}, ${thirdNumber_5}`,
    ); // For console only
} else if (secondNumber_5 > firstNumber_5 && secondNumber_5 > thirdNumber_5) {
    console.log(
        `${secondNumber_5} is Greater than ${firstNumber_5}, ${thirdNumber_5}`,
    ); // For console only
} else {
    console.log(
        `${thirdNumber_5} is Greater than ${firstNumber_5}, ${secondNumber_5}`,
    ); // For console only
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 6. Check whether a year is a leap year.
let givenYear_6 = 2024;

if (
    (givenYear_6 % 4 === 0 && givenYear_6 % 100 !== 0) ||
    givenYear_6 % 400 === 0
) {
    console.log(`${givenYear_6} is a Leap Year.`); // For console only
} else {
    console.log(`${givenYear_6} is NOT a Leap Year.`); // For console only
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 7. Check whether a number is divisible by both 3 and 5.
let givenNumber_7 = 15;

if (givenNumber_7 % 3 === 0 && givenNumber_7 % 5 === 0) {
    console.log(`${givenNumber_7} is divisible by both 3 & 5.`);
} else if (givenNumber_7 % 3 === 0) {
    console.log(`${givenNumber_7} is divisible by 3 only.`);
} else if (givenNumber_7 % 5 === 0) {
    console.log(`${givenNumber_7} is divisible by 5 only.`);
} else {
    console.log(`${givenNumber_7} is neither divisible by 3 nor 5.`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

let givenGrades_8 = 50;

if (givenGrades_8 >= 90) {
    console.log(`Marks obtained: ${givenGrades_8}, Grade ==> A`);
} else if (givenGrades_8 >= 74) {
    console.log(`Marks obtained: ${givenGrades_8}, Grade ==> B`);
} else if (givenGrades_8 >= 50) {
    console.log(`Marks obtained: ${givenGrades_8}, Grade ==> C`);
} else {
    console.log(`Marks obtained: ${givenGrades_8}, Grade ==> Fail`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 9. Check whether a character is a vowel or consonant.
let givenCharacter_9 = "A";
capitalizeGivenCharacter_9 = givenCharacter_9.toUpperCase();

if (
    capitalizeGivenCharacter_9 === "A" ||
    capitalizeGivenCharacter_9 === "E" ||
    capitalizeGivenCharacter_9 === "I" ||
    capitalizeGivenCharacter_9 === "O" ||
    capitalizeGivenCharacter_9 === "U"
) {
    console.log(`Given Character: ${givenCharacter_9}, Which is a vowel.`);
} else {
    console.log(`Given Character: ${givenCharacter_9}, Which is NOT a vowel.`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 10. Create a calculator using `switch` statement.
let firstNumber_10 = 2;
let secondNumber_10 = 5;
let operator_10 = "%";

switch (operator_10) {
    case "+":
        console.log(firstNumber_10 + secondNumber_10);
        break;

    case "-":
        console.log(firstNumber_10 - secondNumber_10);
        break;
    
    case "*":
        console.log((firstNumber_10 * secondNumber_10));
        break;

    case "/":
        console.log(firstNumber_10 / secondNumber_10);
        break;

    case "%":
        console.log(firstNumber_10 % secondNumber_10);
        break;

    default:
        console.log(`${operator_10} is not applicable.`)
};

// ========================================================================================================================================================
// ========================================================================================================================================================
// 11. Print the day name based on a number (1–7).
let dayNumber_11 = 8;

switch(dayNumber_11) {
    case 1:
        console.log(`Today is MONDAY.`);
        break;

    case 2:
        console.log(`Today is TUESDAY.`);
        break;

    case 3:
        console.log(`Today is WEDNESDAY.`);
        break;

    case 4:
        console.log(`Today is THURSDAY.`);
        break;

    case 5:
        console.log(`Today is FRIDAY.`);
        break;

    case 6:
        console.log(`Today is SATURDAY.`);
        break;

    case 7:
        console.log(`Today is SUNDAY.`);
        break;

    default:
        console.log(`${dayNumber_11} is not defined...`);
};

// ========================================================================================================================================================
// ========================================================================================================================================================
// 12. Check whether a username is `"admin"` and password is `"1234"`.
let userName = "admi";
let userPassword = "123";

if (userName === "admin" && userPassword === "1234") {
    console.log(`Welcome User...`);
} else if (userName !== "admin" && userPassword === "1234") {
    console.log(`Password is correct.`);
} else if (userName === "admin" && userPassword !== "1234") {
    console.log(`Username is correct`);
} else {
    console.log(`Username & Password incorrect`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 13. Determine if a given number is zero, positive, or negative.
let givenNumber_13 = "s";

if (givenNumber_13 > 0) {
    console.log(`${givenNumber_13} is Positive.`);
} else if (givenNumber_13 < 0) {
    console.log(`${givenNumber_13} is Negative.`);
} else if (givenNumber_13 === 0) {
    console.log(`${givenNumber_13} is Zero.`);
} else {
    console.log(`${givenNumber_13} is not a Number.`)
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 14. Determine if a number is divisible by 3.
let givenNumber_14 = 12;

if (givenNumber_14 % 3 === 0) {
    console.log(`${givenNumber_14} is divisible by 3.`);
} else {
    console.log(`${givenNumber_14} is NOT divisible by 3.`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 15. Determine if someone qualifies for a student discount (age under 25).
let userAge_15 = 26;
let discount_15 = 10;
let studentFinalPrice_15 = 20;

if (userAge_15 >= 25) {
    console.log(`User age: ${userAge_15}, Final Price: ${studentFinalPrice_15}`);
} else {
    console.log(`User age: ${userAge_15}, Final Price: ${(studentFinalPrice_15) - (studentFinalPrice_15 * discount_15 / 100)}`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 16. Identify the bigger of two given marks.
let firstNumber_16 = 4;
let secondNumber_16 = 3;

if (firstNumber_16 > secondNumber_16) {
    console.log(`${firstNumber_16} is Greater than ${secondNumber_16}`);
} else if (firstNumber_16 < secondNumber_16){
    console.log(`${firstNumber_16} is Smaller than ${secondNumber_16}`);
} else {
    console.log(`${firstNumber_16} is Equal to ${secondNumber_16}`);
};

// ========================================================================================================================================================
// ========================================================================================================================================================
// 17. Identify the biggest of three given marks.
let firstNumber_17 = 43;
let secondNumber_17 = 43;
let thirdNumber_17 = 43;

if (firstNumber_17 > secondNumber_17 && firstNumber_17 > thirdNumber_17) {
    console.log(`${firstNumber_17} is Greater than ${secondNumber_17}, ${thirdNumber_17}.`);
} else if (firstNumber_17 < secondNumber_17 && secondNumber_17 > thirdNumber_17) {
    console.log(`${secondNumber_17} is Greater than ${firstNumber_17}, ${thirdNumber_17}.`);
} else if (firstNumber_17 < thirdNumber_17 && secondNumber_17 < thirdNumber_17) {
    console.log(`${thirdNumber_17} is Greater than ${firstNumber_17}, ${secondNumber_17}`);
} else {
    console.log(`Might be possible that all are Equal.`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 18. Determine if a given year falls in the 21st century.
let userYear_18 = 2026;

if (userYear_18 >= 2001 && userYear_18 <= 2100) {
    console.log(`${userYear_18} falls in the 21st century.`);
} else {
    console.log(`${userYear_18} does not falls in the 21st century.`);
};

// ========================================================================================================================================================
// ========================================================================================================================================================
// 19. Determine if a number is divisible by both 4 and 6.
let givenNumber_19 = 18;

if (givenNumber_19 % 4 === 0 && givenNumber_19 % 6 === 0) {
    console.log(`${givenNumber_19} is divisible by both 4 & 6.`);
} else if (givenNumber_19 % 4 === 0) {
    console.log(`${givenNumber_19} is divisible by 4 only.`);
} else if (givenNumber_19 % 6 === 0) {
    console.log(`${givenNumber_19} is divisible by 6 only.`);
} else {
    console.log(`${givenNumber_19} is neither divisible by 4 nor 6.`);
};

// ========================================================================================================================================================
// ========================================================================================================================================================
// 20. Build a fuel efficiency rating system:
// - 20+ km/l → Excellent
// - 15–19 km/l → Good
// - 10–14 km/l → Average
// - below 10 → Poor

let fuelEfficiency_20 = 20;

if (fuelEfficiency_20 >= 20) {
    console.log(`Excellent fuel Efficiency.`);
} else if (fuelEfficiency_20 >= 15 && fuelEfficiency_20 <= 19) {
    console.log(`Good fuel Efficiency.`);
} else if (fuelEfficiency_20 >= 10 && fuelEfficiency_20 <= 14) {
    console.log(`Average fuel Efficiency.`);
} else {
    console.log(`Poor fuel Efficiency.`);
};

// ========================================================================================================================================================
// ========================================================================================================================================================

// 21. Determine whether a given letter is uppercase or lowercase.
let givenLetter_21 = "1";

if (!/[a-zA-Z]/.test(givenLetter_21)) {
    console.log(`${givenLetter_21} Might be Number OR Symbol.`);
} else if (givenLetter_21 === givenLetter_21.toUpperCase()) {
    console.log(`Given letter: ${givenLetter_21} ==> Uppercase`);
} else if (givenLetter_21 === givenLetter_21.toLowerCase()){
    console.log(`Given letter: ${givenLetter_21} ==> Lowercase`);
} else {
    console.log(`Given letter: ${givenLetter_21}, might be Number or Symbol.`);
};


// ========================================================================================================================================================
// ========================================================================================================================================================
// 22. Build a basic unit converter (km to miles, kg to lbs, etc.) using switch.
let givenNumber_22 = 1;
let presentUnit_22 = "kg-lbs";

switch (presentUnit_22){
    case "km-miles":
        console.log(`${givenNumber_22} Km => ${givenNumber_22 * 0.621371} Miles`);
        break;
    
    case "kg-lbs":
        console.log(`${givenNumber_22} Kg => ${givenNumber_22 * 2.20462} lbs`);
        break;

    default:
        console.log(`${presentUnit_22} is not defined.`);
};


// ========================================================================================================================================================
// ========================================================================================================================================================
// 23. Output the season name based on a month number.
let monthName_23 = "April";

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
        console.log(`${monthName_23} is Autum Season.`);
        break;

    default:
        console.log(`${monthName_23} is not defined.`);
}

// ========================================================================================================================================================
// ========================================================================================================================================================
// 24. Verify that an entered PIN equals "4321".
let userPassword_24 = "4321";

if (userPassword_24 === "4321") {
    console.log(`Welcome User`);
} else {
    console.log(`Wrong details.`)
}