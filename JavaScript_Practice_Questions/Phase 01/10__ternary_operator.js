// ========================================================================================================================================================
// =================================================================== TERNARY OPERATOR ===================================================================
// ========================================================================================================================================================

// 1. Check whether a number is even or odd using ternary operator.
let givenNumber_1 = 4;
let result_1 = givenNumber_1 % 2 === 0 ? `${givenNumber_1} is Even` : `${givenNumber_1} is Odd.`;

console.log(result_1);

// ========================================================================================================================================================
// 2. Check whether age is above 18 using ternary operator.
let givenNumber_2 = 18;
let result_2 = givenNumber_2 > 18 ? `User age is Above 18 years` : givenNumber_2 === 18 ? `User is 18 years` : `User is Below 18 years`;

console.log(result_2);

// ========================================================================================================================================================
// 3. Find the greater number between two values using ternary operator.
let firstGivenNumber_3 = 22;
let secondGivenNumber_3 = 3;
let result_3 = firstGivenNumber_3 > secondGivenNumber_3 ? `${firstGivenNumber_3} is Greater than ${secondGivenNumber_3}` : firstGivenNumber_3 === secondGivenNumber_3 ? `${secondGivenNumber_3} is Equa to ${firstGivenNumber_3}` : `${firstGivenNumber_3} is Less than ${secondGivenNumber_3}`;

console.log(result_3);

// ========================================================================================================================================================
// 4. Determine whether a number is positive or negative using a ternary expression.
let givenNumber_4 = 0;
let result_4 = givenNumber_4 > 0 ? `${givenNumber_4} is Positive` : givenNumber_4 < 0 ? `${givenNumber_4} is Negative` : `${givenNumber_4} is Zero`;

console.log(result_4);

// ========================================================================================================================================================
// 5. Determine whether someone is a minor or adult (under/over 18) using a ternary expression.
let givenNumber_5 = 20;
let result_5 = givenNumber_5 >= 18 ? `User is Adult` : `User is Minor`;

console.log(result_5);

// ========================================================================================================================================================
// 6. Determine the larger of two scores using a ternary expression.
let firstGivenNumber_6 = 230;
let secondGivenNumber_6 = 230;

let result_6 = firstGivenNumber_6 > secondGivenNumber_6 ? `${firstGivenNumber_6} is larger than ${secondGivenNumber_6}` : firstGivenNumber_6 < secondGivenNumber_6 ? `${firstGivenNumber_6} is smaller than ${secondGivenNumber_6}` : `${firstGivenNumber_6} Equals to ${secondGivenNumber_6}`;

console.log(result_6);