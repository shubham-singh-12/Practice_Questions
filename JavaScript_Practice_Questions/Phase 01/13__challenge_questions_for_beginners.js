// ========================================================================================================================================================
// ========================================================== CHALLENGE QUESTIONS FOR BEGINNERS ===========================================================
// ========================================================================================================================================================

// 1. Generate a random OTP of 4 digits.
let randomPassword_1 = Math.floor((Math.random() * 9000) + 1000);

console.log(`OTP: ${randomPassword_1}`);

// ========================================================================================================================================================
// 2. Reverse a 3-letter string manually.
let givenString_2 = "SHU";

let reverseString_2 = givenString_2.split("").reverse().join("");

console.log(`Reversed String: ${reverseString_2}`);

// ========================================================================================================================================================
// 3. Find the last character of a string.
let givenString_3 = "Shubham";

let stringLastCharacter_3 = givenString_3.charAt(givenString_3.length - 1);

console.log(`Last character: ${stringLastCharacter_3}`);

// ========================================================================================================================================================
// 4. Convert a full name into uppercase initials.
let givenName_4 = "shubham Singh";

let upperCaseInitials_4 = givenName_4.charAt(0).toUpperCase() + givenName_4.charAt(givenName_4.indexOf(" ") + 1).toUpperCase();

console.log(`Fullname into uppercase initials: ${upperCaseInitials_4}`);

// ========================================================================================================================================================
// 5. Check whether two strings are equal ignoring case sensitivity.
let firstString_5 = 5;
let secondString_5 = "5";

console.log(`${firstString_5 == secondString_5}`);

// ========================================================================================================================================================
// 6. Create a simple login validation system.
let userName_6 = "admin";
let userPassword_6 = "12345";

if (userName_6 === "admin" && userPassword_6 === "12345") {
    console.log(`Welcome User...`);
} else if (userName_6 !== "admin") {
    console.log(`Username or Password is Wrong ❌`);
} else {
    console.log(`Username or Password is Wrong ❌`);
};

// ========================================================================================================================================================
// 7. Find whether a number is a 2-digit or 3-digit number.
let givenNumber_7 = 1;

if (givenNumber_7.toString().length === 2) {
    console.log(`${givenNumber_7} is 2-digit number.`);
} else if (givenNumber_7.toString().length === 3) {
    console.log(`${givenNumber_7} is 3-digit number.`);
} else {
    console.log(`${givenNumber_7} is either 1-digit or more than 3-digit number.`);
};

// ========================================================================================================================================================
// 8. Create a mini ATM balance checker.
let accountNumber_8 = 123456789;
let accountHolderName_8 = "Shubham Singh";
let accountBalance_8 = 2000;

let userAction_8 = "Withdrawal";
let depositedAmount_8 = 500;
let withdrawalAmount_8 = 100;

if (userAction_8 === "Check Balance") {
    console.log(`Current Account Balance: ₹${accountBalance_8}`);
} else if (userAction_8 === "Deposit") {
    console.log(`Amount to be Deposit: ₹${depositedAmount_8}`);
    accountBalance_8 += depositedAmount_8;
    console.log(`Current Account Balance: ₹${accountBalance_8}`);
} else if (userAction_8 === "Withdrawal") {
    if (accountBalance_8 < withdrawalAmount_8) {
        console.log(`Invalid Withdrawal amount....`);
        console.log(`Current Account Balance: ₹${accountBalance_8}`);
    } else {
        accountBalance_8 -= withdrawalAmount_8;
        console.log(`Current Account Balance: ₹${accountBalance_8}`);
    }
} else {
    console.log(`Invalid Service....`);
}


// ========================================================================================================================================================
// 9. Simulate a traffic light system using `switch`.
let currentTrafficLight_9 = "GREEN";

switch(currentTrafficLight_9.toLowerCase()) {
    case "red":
        console.log(`STOP 🔴`);
        break;

    case "yellow":
        console.log(`READY 🟡`);
        break;

    case "green":
        console.log(`Go 🟢`);
        break;

    default:
        console.log(`Glitch in Traffic light....`);
};

// ========================================================================================================================================================
// 10. Build a small marksheet generator using variables and conditionals.
let studentName_10 = "Shubham Singh";
let studentRollnumber_10 = 987456321;

let englishMarks_10 = 80;
let hindiMarks_10 = 80;
let mathsMarks_10 = 80;
let scienceMarks_10 = 80;

let totalMarks_10 = (englishMarks_10 + hindiMarks_10 + mathsMarks_10 + scienceMarks_10);
let totalPercentage_10 = (totalMarks_10 / 500) * 100;
let studentMarksheet_10;
let studentGrade_10;
let result_10;


if (englishMarks_10 < 33 || hindiMarks_10 < 33 || mathsMarks_10 < 33 || scienceMarks_10 < 33 || totalPercentage_10 < 33) {
    studentGrade_10 = "FAIL";
    result_10 = "FAIL";
} else if (totalPercentage_10 >=33 && totalPercentage_10 < 40) {
    studentGrade_10 = "E";
    result_10 = "PASS";
} else if (totalPercentage_10 >=40 && totalPercentage_10 < 50){
    studentGrade_10 = "D";
    result_10 = "PASS";
} else if (totalPercentage_10 >=50 && totalPercentage_10 < 70){
    studentGrade_10 = "C";
    result_10 = "PASS";
} else if (totalPercentage_10 >=70 && totalPercentage_10 <85){
    studentGrade_10 = "B";
    result_10 = "PASS";
} else if (totalPercentage_10 >=85 && totalPercentage_10 <95){
    studentGrade_10 = "A";
    result_10 = "PASS";
} else {
    studentGrade_10 = "A+";
    result_10 = "PASS";
}

studentMarksheet_10 = `
Student Name: ${studentName_10}
Roll Number: ${studentRollnumber_10}

Marks in English: ${englishMarks_10}
Marks in Hindi: ${hindiMarks_10}
Marks in Maths: ${mathsMarks_10}
Marks in Science: ${scienceMarks_10}
Marks Obtained: ${totalMarks_10}
Total Marks: 500

Total Percentage: ${totalPercentage_10.toFixed(2)}%;

Grade: ${studentGrade_10}
Result: ${result_10}
`

console.log(studentMarksheet_10);


// ========================================================================================================================================================
// 11. Generate a random 5-digit OTP.
let userOTP_11 = (Math.floor(Math.random() * 90000) + 10000);

console.log(`5-digit OTP: ${userOTP_11}`);

// ========================================================================================================================================================
// 12. Manually reverse a 5-letter string.
let givenString_12 = "EDCBA";

let reverseString_12 = givenString_12.split("").reverse().join("");

console.log(`5-letter reversed string: ${reverseString_12}`);

// ========================================================================================================================================================
// 13. Identify the first and last characters of a string together.
let givenString_13 = "Shubham Singh";
let firstCharacter_13 = givenString_13.charAt(0);
let lastCharacter_13 = givenString_13.charAt(givenString_13.length - 1);

console.log(`First character: ${firstCharacter_13} \nLast character: ${lastCharacter_13}`);

// ========================================================================================================================================================
// 14. Turn a full name into initials only (e.g., "John Doe" → "J.D.").
let givenName_14 = "Shubham Singh";

let nameInitials_14 = `${givenName_14.split(" ")[0][0].toUpperCase()}.${givenName_14.split(" ")[1][0].toUpperCase()}.`;

console.log(`Full Name initials: ${nameInitials_14}`);

// ========================================================================================================================================================
// 15. Determine whether two strings match while ignoring extra whitespace.
let firstString_15 = "   Shubham   ";
let secondString_15 = "Shubham";

console.log(`${firstString_15.trim() === secondString_15.trim()}`);

// ========================================================================================================================================================
// 16. Build a basic age-verification gate (must be 18+ to proceed).
let userAge_16 = 15;

if (userAge_16 >= 18) {
    console.log(`User can drive.`);
} else {
    console.log(`User can't drive.`);
};

// ========================================================================================================================================================
// 17. Determine whether a number has exactly 5 digits.
let givenNumber_17 = 12345;

let checkDigits_15 = givenNumber_17.toString().length;

if (checkDigits_15 === 5){
    console.log(`${givenNumber_17} has exactly 5 digits.`);
} else if (checkDigits_15 < 5) {
    console.log(`${givenNumber_17} has ${checkDigits_15} digits.`);
} else {
    console.log(`${givenNumber_17} has ${checkDigits_15} digits.`);
}

// ========================================================================================================================================================
// 18. Build a mini savings goal tracker (deposit and withdraw).

// ========================================================================================================================================================
// 19. Simulate a coffee machine menu selection using switch.
let coffeeName_19 = "Americano"
let pickupCounter_19 = 2;
let orderStatus_19 = `Your order for ${coffeeName_19} is Accepted ✅`;
let pickupCounterNo_19 = `Pickup your order from Counter no: ${pickupCounter_19}`;

switch(coffeeName_19) {
    case "Espresso":
    case "Americano":
    case "Latte":
    case "Cappuccino":
    case "Flat White":
    case "Mocha":
        console.log(orderStatus_19);
        console.log(pickupCounterNo_19)
        break;

    default:
        console.log(`Not Available ❌`);
};

// ========================================================================================================================================================
// 20. Build a small receipt generator using variables and conditionals.
let customerName_20 = "Shubham Singh";
let receiptId_20 = `#${Math.floor(Math.random() * 9000) + 1000}`;
let purchasedDate_20 = new Date().toDateString();
let purchasedTime_20 = new Date().toLocaleTimeString();
let subTotal_20;
let tax_20;
let total_20;

let firstPurchasedItem_20 = "Men's Classic Tee";
let firstPurchasedQuantity_20 = 1;
let firstPurchasedPrice_20 = 19.90;


let secondPurchasedItem_20 = "Women's V-Neck Tee";
let secondPurchasedQuantity_20 = 1;
let secondPurchasedPrice_20 = 9.90;


let thirdPurchasedItem_20 = "Kid's Crew Neck Tee";
let thirdPurchasedQuantity_20 = 4;
let thirdPurchasedPrice_20 = 9.90;


console.log(`================================================================================`);
console.log(`=============================== Purchased Receipt ==============================`);
console.log(`================================================================================`);

console.log(`Receipt Number:        ${receiptId_20}`)  
console.log(`Customer Name:         ${customerName_20}`);
console.log(`Purchased Date:        ${purchasedDate_20}`);
console.log(`Purchased Time:        ${purchasedTime_20}`);
console.log(`================================================================================`)
console.log()

console.log(`Item Name:             ${firstPurchasedItem_20}`);
console.log(`Item Quantity:         ${firstPurchasedQuantity_20}`);
console.log(`Price per Quantity:    ${firstPurchasedPrice_20}`);
console.log()

console.log(`Item Name:             ${secondPurchasedItem_20}`);
console.log(`Item Quantity:         ${secondPurchasedQuantity_20}`);
console.log(`Price per Quantity:    ${secondPurchasedPrice_20}`);
console.log()

console.log(`Item Name:             ${thirdPurchasedItem_20}`);
console.log(`Item Quantity:         ${thirdPurchasedQuantity_20}`);
console.log(`Price per Quantity:    ${thirdPurchasedPrice_20}`);
console.log()

console.log(`================================================================================`);

subTotal_20 = ((firstPurchasedPrice_20 * firstPurchasedQuantity_20) + (secondPurchasedPrice_20 * secondPurchasedQuantity_20) + (thirdPurchasedPrice_20 * thirdPurchasedQuantity_20));
console.log(`Subtotal:              ${subTotal_20}`);

tax_20 = (subTotal_20 * (18 / 100));
console.log(`Tax:                   ${tax_20.toFixed(2)}`);

total_20 = subTotal_20 + tax_20;
console.log(`Total:                 ${total_20.toFixed(2)}`);