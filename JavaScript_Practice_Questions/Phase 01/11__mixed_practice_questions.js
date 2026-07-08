// ========================================================================================================================================================
// =============================================================== MIXED PRACTICE QUESTIONS ===============================================================
// ========================================================================================================================================================

// 1. Create a mini biodata program using variables and template literals.
let userName_1 = "Shubham";
let userAge_1 = 24;
let userGender_1 = "Male";
let userCity_1 = "Delhi";
let userCountry_1 = "India";
let isEmployeed_1 = true
let userJobRole_1 = "Full Stack Developer";
let userEmail_1 = "abc@gmail.com"

let userBiodata_1 = `
-------------------- BIODATA --------------------
Name: ${userName_1}
Age: ${userAge_1}
Gender: ${userGender_1}
City: ${userCity_1}
Country: ${userCity_1}
Employement Status: ${isEmployeed_1 ? userJobRole_1 : 'Ready to Work'}
Contact Info: ${userEmail_1}
`;

console.log(userBiodata_1);


// ========================================================================================================================================================
// 2. Calculate the area of a rectangle.
let rectangleLength_2 = 4;
let rectangleWidth_2 = 2;

let areaOfRectangel_2 = rectangleLength_2 * rectangleWidth_2;

console.log(areaOfRectangel_2);

// ========================================================================================================================================================
// 3. Calculate the simple interest.
let principal_3 = 2000;
let rateOfInterest_3 = 2;
let time_3 = 2;

let simpleInterest_3 = (principal_3 * rateOfInterest_3 * time_3) / 100;

console.log(simpleInterest_3);

// ========================================================================================================================================================
// 4. Convert temperature from Celsius to Fahrenheit.
let givenCelsiusTemperature_4 = 2;

let celsiusToFahrenheit_4 = (givenCelsiusTemperature_4 * (9 / 5) + 32);

console.log(`${givenCelsiusTemperature_4}°C => ${celsiusToFahrenheit_4}°F`);

// ========================================================================================================================================================
// 5. Convert kilometers into meters.
let distanceInKilometers_5 = 2;

let kiloleterToMeters = distanceInKilometers_5 * 1000;

console.log(`${distanceInKilometers_5}Km ==> ${kiloleterToMeters}m`)

// ========================================================================================================================================================
// 6. Calculate total marks and percentage of 5 subjects.
let firstSubject_6 = 20;
let secondSubject_6 = 20;
let thirdSubject_6 = 20;
let fourthSubject_6 = 20;
let fifthSubject_6 = 20;

let totalMarks_6 = (firstSubject_6 + secondSubject_6 + thirdSubject_6 + fourthSubject_6 + fifthSubject_6);
let percentage_6 = (totalMarks_6 / 500) * 100;

console.log(`Total marks: ${totalMarks_6}`);
console.log(`Percentage: ${percentage_6.toFixed(2)}%`);

// ========================================================================================================================================================
// 7. Calculate electricity bill based on units consumed.
let unitConsumed_7 = 350;
let pricePerUnit_7 = 5;
let totalBill_7;

if (unitConsumed_7 <= 100) {
    totalBill_7 = unitConsumed_7 * pricePerUnit_7;
    console.log(`Total Bill Amount: ${totalBill_7}`);
} else if (unitConsumed_7 > 100 && unitConsumed_7 <= 200) {
    totalBill_7 = ((100 * pricePerUnit_7) + ((unitConsumed_7 - 100) * 7));
    console.log(`Total Bill Amount: ${totalBill_7}`);
} else if (unitConsumed_7 > 200 && unitConsumed_7 <= 300) {
    totalBill_7 = ((100 * pricePerUnit_7) + (100 * 7) + ((unitConsumed_7 - 200) * 10));
    console.log(`Total Bill Amount: ${totalBill_7}`);
} else {
    totalBill_7 = ((100 * pricePerUnit_7) + (100 * 7) + (100 * 10) + ((unitConsumed_7 - 300) * 12));
    console.log(`Total Bill Amount: ${totalBill_7}`);
};

// ========================================================================================================================================================
// 8. Create a username generator using first name and birth year.
let firstName_8 = "Shubham";
let birthYear_8 = 2002;

let username_8 = `${firstName_8.toLowerCase()}_${birthYear_8}`;

console.log(`Username: ${username_8}`);


// ========================================================================================================================================================
// 9. Check whether a string starts with a specific letter.
let givenString_9 = "Shubham";
let specific_letter_9 = "S";

if(givenString_9.startsWith(specific_letter_9)){
    console.log(`Yes, given string start with a specific letter: ${specific_letter_9}`);
} else {
    console.log(`No, given string does not start with a specific letter: ${specific_letter_9}`);
};

// ========================================================================================================================================================
// 10. Count the total characters in a sentence excluding spaces.
let givenSentence_10 = "Shubham Singh";

let totalCharacter_10 = givenSentence_10.length;

console.log(`Total Characters: ${totalCharacter_10}`);

// ========================================================================================================================================================
// 11. Build a short personal intro generator using variables and template literals.
let userFirstName_11 = "Shubham";
let userLastName_11 = "Singh";
let userGraduation_11 = "B.Tech";
let userBranch_11 = "CSE";
let userPassingYear_11 = 2025;
let userCareer_11 = "Full Stack Developer";

let completeIntro_11 = `
Good Morning, Myself ${userFirstName_11} ${userLastName_11}, I had completed my Graduation from ${userGraduation_11} branch ${userBranch_11}, in the year of ${userPassingYear_11}, Currently i am interested in ${userCareer_11}.
`;

console.log(completeIntro_11);

// ========================================================================================================================================================
// 12. Work out the area and circumference of a circle.
let circleRadius_12 = 10;

let area12 = (Math.PI * circleRadius_12 ** 2).toFixed(3);
let circumference12 = (2 * (Math.PI * circleRadius_12)).toFixed(3);

console.log(`Area of Circle: ${area12}`);
console.log(`Circunference of Circle: ${circumference12}`);

// ========================================================================================================================================================
// 13. Compute simple interest for a 3-year loan.
let principal_13 = 2000;
let rateOfInterest_13 = 2;
let time_13 = 3;

let simpleInterest_13 = (principal_13 * rateOfInterest_13 * time_13) / 100;
let totalAmount_13 = principal_13 + simpleInterest_13;

console.log(`Simple Interest for a 3-year loan: ${simpleInterest_13}`);
console.log(`Total re-payment amount: ${totalAmount_13}`);

// ========================================================================================================================================================
// 14. Convert a temperature from Kelvin to Celsius.
let givenKelvin_14 = 300;

let celsiusTemp_14 = (givenKelvin_14 - 273.15).toFixed(2);

console.log(`${givenKelvin_14}K => ${celsiusTemp_14}°C`)

// ========================================================================================================================================================
// 15. Convert miles into kilometers.
let givenMiles_15 = 100;

let kilometerDistance_15 = givenMiles_15 * 1.60934;

console.log(`${givenMiles_15} miles => ${kilometerDistance_15} Km `)

// ========================================================================================================================================================
// 16. Compute total and average marks across 6 subjects.
let firstSubject_16 = 20;
let secondSubject_16 = 20;
let thirdSubject_16 = 20;
let fourthSubject_16 = 20;
let fifthSubject_16 = 20;
let sixthSubject_16 = 20;

let totalMarks_16 = (firstSubject_16 + secondSubject_16 + thirdSubject_16 + fourthSubject_16 + fifthSubject_16 + sixthSubject_16);
let averageMarks_16 = (totalMarks_16 / 6).toFixed(2);

console.log(`Total Marks: ${totalMarks_16}`);
console.log(`Average Marks: ${averageMarks_16}`);

// ========================================================================================================================================================
// 17. Compute a water bill based on liters consumed.
let consumedWater_17 = 80;
let waterPerLiter_17 = 10;
let totalBillAmount_17;

if (consumedWater_17 <= 20) {
    totalBillAmount_17 = (consumedWater_17 * waterPerLiter_17);
    console.log(`Total water bill: ${totalBillAmount_17}`);
} else if (consumedWater_17 > 20 && consumedWater_17 <= 50) {
    totalBillAmount_17 = ((20 * 10) + ((consumedWater_17 - 20) * 20));
    console.log(`Total water bill: ${totalBillAmount_17}`);
} else {
    totalBillAmount_17 = ((20 * 10) + (30 * 20) + ((consumedWater_17 - 50) * 30));
    console.log(`Total water bill: ${totalBillAmount_17}`);
};

// ========================================================================================================================================================
// 18. Build an employee ID generator using department code and joining year.
let softwareDepartmentCode_18 = "SDE";
let HRDepartmentCode_18 = "HR";
let backendEngineerDepartmentCode_18 = "BED";
let cloudDepartmentCode_18 = "DOE";

let userName_18 = "Shubham Singh";
let joiningYear_18 = 2026;
let userDepartment_18 = softwareDepartmentCode_18;


let employeeId = `${userName_18.split(" ")[0].toLowerCase()}-${userDepartment_18.toLowerCase()}-${joiningYear_18.toString().slice(-2)}`;

console.log(employeeId);

// ========================================================================================================================================================
// 19. Determine if a string ends with a particular letter.
let givenString_19 = "Shubham Singh";

let particular_letter_19 = "H";

console.log(givenString_19.endsWith(particular_letter_19));

// ========================================================================================================================================================
// 20. Count how many digits appear in a sentence (ignoring letters and spaces).
let givenSentencs_20 = "I have 3 cats and 12 dogs";
let numbers_20 = givenSentencs_20.match(/\d/g);

let digitsPresents_20 = numbers_20 ? numbers_20.length : "No digit appears";

console.log(digitsPresents_20);