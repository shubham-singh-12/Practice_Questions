// =================================================================== TERNARY OPERATOR ===================================================================


// 1. Check whether a number is even or odd using ternary operator.
let userNumber = 2;
let result = userNumber % 2 == 0 ? "Even" : "Odd";

console.log(result);





// ========================================================================================================================================================
// 2. Check whether age is above 18 using ternary operator.
let userAge = 18;
let checkAge = userAge >= 18 ? "Adult" : "Minor";

console.log(checkAge);





// ========================================================================================================================================================
// 3. Find the greater number between two values using ternary operator.
let number_1 = 34;
let number_2 = 34;

let greatest_number = number_1 > number_2 ? `${number_1} is Greater than ${number_2}` : number_1 < number_2 ? `${number_2} is greater than ${number_1}` : `${number_1} Equal to ${number_2}`;

console.log(greatest_number);





// ========================================================================================================================================================
// 4. Determine whether a number is positive or negative using a ternary expression.
let userNumber_4 = 0;

let positive_negative_4 = userNumber_4 > 0 ? `${userNumber_4} is Positive.` : userNumber_4 < 0 ? `${userNumber_4} is Negative.` : `${userNumber_4} is Zero.`;

console.log(positive_negative_4);





// ========================================================================================================================================================
// 5. Determine whether someone is a minor or adult (under/over 18) using a ternary expression.
let userAge_5 = 18;

let ageVerify = userAge_5 >= 18 ? `User is 18 or Above` : `User is under 18`;

console.log(ageVerify);





// ========================================================================================================================================================
// 6. Determine the larger of two scores using a ternary expression.
let score_1_6 = 76;
let score_2_6 = 76;

let largestScore = score_1_6 > score_2_6 ? `${score_1_6} is larger than ${score_2_6}` : score_1_6 < score_2_6 ? `${score_2_6} is larger than ${score_1_6}` : `${score_1_6} is Equal to ${score_2_6}`;

console.log(largestScore);