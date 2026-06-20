// ============================================================== LOGICAL THINKINH QUESTIONS ==============================================================


// 1. Take two numbers and print which one is greater.
let number_1 = 30;
let number_2 = 30;

function greaterNumber() {
    if (number_1 > number_2) {
        return `${number_1} is greater than ${number_2}`;
    } else if (number_1 < number_2) {
        return `${number_2} is greater than ${number_1}`;
    } else {
        return `${number_1} is equal to ${number_2}`
    }
};

console.log(greaterNumber());






// ================================================================
// 2. Check whether a number lies between 10 and 50.
let userNumber = 10;

function checkNumberPosition() {
    if (userNumber === 0) {
        return `${userNumber} is equal to 0.`
    } else if (userNumber < 10 && userNumber >= 1) {
        return `${userNumber} lies between 1 to 9`;
    } else if (userNumber >= 10 & userNumber <= 50) {
        return `${userNumber} lies between 10 to 50.`
    } else {
        return `${userNumber} is greater than 50.`
    }
};

console.log(checkNumberPosition());





// ================================================================
// 3. Check whether a password length is greater than 8.
let userPassword = "1234567";

function passwordLength() {
    let passwordLength = userPassword.length;

    if (passwordLength < 8) {
        return `Password length: ${passwordLength} \nNot Acceptable`
    } else {
        return `Password length: ${passwordLength} \nAcceptable`
    }
}

console.log(passwordLength());





// ================================================================
// 4. Check if a person can drive:
// - age > 18
// - has license = true

let personAge = 18;
let haslicensed = true;

function verifyAge() {
    if (personAge < 18 && haslicensed === false) {
        return `Person is MINOR \nSo, can't drive.`
    } else if (personAge < 18 && haslicensed === true) {
        return `Person is MINOR, but it has licensed, which is not valid. \nSo,can't drive.`
    } else if (personAge >= 18 && haslicensed === false) {
        return `Person is ADULT but don't have LICENSED. \nSo, can't drive`;
    } else {
        return `Person is ADULT & has LICENSED. \nCan Drive.`;
    }
};

console.log(verifyAge());





// ================================================================
// 5. Check whether a number is divisible by 2, 3, or both.
let divisibleNumber = 17;

function checkDivisibility() {
    if (divisibleNumber % 2 === 0 && divisibleNumber % 3 === 0) {
        return `${divisibleNumber} is divisible by both 2, 3.`
    } else if (divisibleNumber % 2 === 0 && divisibleNumber % 3 !== 0) {
        return `${divisibleNumber} is divisible by 2 only.`
    } else if (divisibleNumber % 2 !== 0 && divisibleNumber % 3 === 0) {
        return `${divisibleNumber} is divisibly by 3 only.`
    } else {
        return `${divisibleNumber} is not divisible by 2, 3.`
    }
};

console.log(checkDivisibility());





// ================================================================
// 6. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
let userName = "Shubham"
let currentTime = new Date().getHours();

function greet() {
    if (currentTime >= 0 && currentTime < 12) {
        return `Good Morning ${userName}.`
    } else if (currentTime >= 12 && currentTime < 17) {
        return `Good Afternoon ${userName}.`
    } else if (currentTime >= 17 && currentTime <= 21) {
        return `Good Evening ${userName}.`
    } else {
        return `Good Night ${userName}.`
    }
};

console.log(greet());







// ================================================================
// 7. Find whether a number is a multiple of 10.
let multipleNumber = 500;

function checkMultiple() {
    if (multipleNumber % 10 == 0) {
        return `${multipleNumber} is multiple of 10.`
    } else {
        return `${multipleNumber} is not multiple of 10.`
    }
}

console.log(checkMultiple());





// ================================================================
// 8. Create a simple discount calculator.
function finalProductPrice(productPrice) {

    let discountPercentage;

    if (productPrice >= 3000) {
        discountPercentage = 30;

    } else if (productPrice >= 2000) {
        discountPercentage = 20;

    } else if (productPrice >= 1000) {
        discountPercentage = 10;

    } else {
        discountPercentage = 0;
    }

    let discountAmount = (discountPercentage / 100) * productPrice;
    let finalPrice = productPrice - discountAmount;

    return `You got ${discountPercentage}%. \nFinal Price: ₹ ${finalPrice}`
};

console.log(finalProductPrice(2000));





// ================================================================
// 9. Check whether a product is in stock.

// Capitalize 1st Letter from Product Name
function correctProductName(text) {
    let firstLetter = text.charAt(0).toUpperCase();
    let remainingLetters = text.slice(1).toLowerCase();
    return firstLetter + remainingLetters;
}

// Check Product Availability
function checkProductAvailability(productName, productQuantity) {
    let formatedName = correctProductName(productName);

    if (productQuantity > 0) {
        return `${formatedName} is in Stock. ${productQuantity} left`
    } else {
        return `${formatedName} is Out of Stock.`
    }
};

console.log(checkProductAvailability("wireless Mouse", 20));
console.log(checkProductAvailability("Keyboard", 0));
console.log(checkProductAvailability("Router", 1));





// ================================================================
// 10. Calculate final bill after GST.

function GSTBillCalculate(amount, category) {

    let gstPercentage;

    if (category.toLowerCase() === "essential") {
        gstPercentage = 5;
    } else if (category.toLowerCase() === "standard") {
        gstPercentage = 18;
    } else if (category.toLowerCase() === "luxury") {
        gstPercentage = 28;
    } else {
        return `${category} is not correct.`
    }

    let gstAmount = (amount * gstPercentage) / 100;
    let finalAmount = amount - gstAmount;

    return `Category: ${category}, \nGST Applied: ${gstPercentage}%, \nGST Amount: ₹ ${gstAmount}, \nFinal Amount: ₹ ${finalAmount}`;
};

console.log(GSTBillCalculate(2000, "Standard"));