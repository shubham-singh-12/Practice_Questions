// =============================================================== MIXED PRACTICE QUESTIONS ===============================================================


// 1. Create a mini biodata program using variables and template literals.
let userName = "Shubham Singh";
let userAge = 24;
let userGender = "Male";
let userHeight = "5.6";
let userWeight = 78;

console.log(`=================== Bio Data ===================\n`);
let userBioData = `Name: ${userName}, \nAge: ${userAge}, \nGender: ${userGender}, \nHeight: ${userHeight}ft, \nWeight: ${userWeight}Kg.`;

console.log(userBioData);





// ================================================================
// 2. Calculate the area of a rectangle.
let rectangleWidth = 2;
let rectangleLength = 4;

let area = rectangleWidth * rectangleLength;

console.log(`Area of Rectangle: ${area}`);





// ================================================================
// 3. Calculate the simple interest.
let principle = 24;
let rateOfInterest = 5;
let time = 2;

let simpleInterest = (principle * rateOfInterest * time) / 100;

console.log(`Simple Interest: ${simpleInterest}`);





// ================================================================
// 4. Convert temperature from Celsius to Fahrenheit.
let givenCelsius = 24;

let fahrenheit = ((givenCelsius * (9 / 5)) + 32);

console.log(`${fahrenheit}°F`);





// ================================================================
// 5. Convert kilometers into meters.
let kilometers = 1;

let meters = kilometers * 1000;

console.log(`${kilometers} Km = ${meters} m`)





// ================================================================
// 6. Calculate total marks and percentage of 5 subjects.
let subject_1 = 10;
let subject_2 = 20;
let subject_3 = 30;
let subject_4 = 40;
let subject_5 = 50;

let total_marks = (subject_1 + subject_2 + subject_3 + subject_4 + subject_5);
let total_percentage = (total_marks / 500) * 100;

console.log(`Total Marks: ${total_marks} \nPercentage: ${total_percentage}%`);





// ================================================================
// 7. Calculate electricity bill based on units consumed.
let consumedUnits = 20;

let billAmount = 0;
let fixedCharges = 50;
let totalBill = 0;

if (consumedUnits <= 100) {
    billAmount = consumedUnits * 4;
} else if (consumedUnits <= 200) {
    billAmount = (100 * 4) + ((consumedUnits - 100) * 6);
} else {
    billAmount = (100 * 4) + (200 * 6) + ((consumedUnits - 300) * 9);
}

totalBill = billAmount + fixedCharges;

console.log(`Consumed Units: ${consumedUnits} Units.`);
console.log(`Total Bill: ₹${totalBill}`);





// ================================================================
// 8. Create a username generator using first name and birth year.

let userFirstName = "Shubham";
let userBirthYear = 2003;

let generatedUserName = `${userFirstName}${userBirthYear}`;

console.log(generatedUserName);





// ================================================================
// 9. Check whether a string starts with a specific letter.

let userString = "Shubham";

let checkString = userString.includes("S");

console.log(checkString);





// ================================================================
// 10. Count the total characters in a sentence excluding spaces.
let userCharacter = "Shubham";

let characters = userCharacter.length;

console.log(characters);