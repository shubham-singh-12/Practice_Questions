// ========================================================================================================================================================
// ============================================================== LOGICAL THINKING QUESTIONS ==============================================================
// ========================================================================================================================================================

// 1. Take two numbers and print which one is greater.
let firstNumber_1 = 3;
let secondNumber_1 = 5;

let greatestNumber_1 = firstNumber_1 > secondNumber_1 ? `${firstNumber_1} is greater than ${secondNumber_1}` : `${secondNumber_1} is greater than ${firstNumber_1}`;

console.log(greatestNumber_1);

// ========================================================================================================================================================
// 2. Check whether a number lies between 10 and 50.
let givenNumber_2 = 9;

let numberLiesBetween_2 = givenNumber_2 >= 10 && givenNumber_2 <= 50 ? `${givenNumber_2} lies between 10 & 50` : `${givenNumber_2} does not lies between 10 & 50`;

console.log(numberLiesBetween_2);

// ========================================================================================================================================================
// 3. Check whether a password length is greater than 8.
let userPassword_3 = "shubham_12345";
let userPasswordLength_3 = userPassword_3.length;

if(userPasswordLength_3 > 8) {
    console.log(`User password length is Greater than 8`);
} else {
    console.log(`User password length is smaller than 8`);
};

// ========================================================================================================================================================
// 4. Check if a person can drive:
// - age > 18
// - has license = true
let userAge_4 = 19;
let userHasLicense = true;

if (userAge_4 > 18 && userHasLicense) {
    console.log(`User can drive.`);
} else if (userAge_4 < 18 && userHasLicense) {
    console.log(`User License is not valid.`);
} else if (userAge_4 > 18 && !userHasLicense){
    console.log(`User cannot drive because doesn't have License.`);
} else {
    console.log(`User Age is below 18 years, and doesn't have License.`);
};

// ========================================================================================================================================================
// 5. Check whether a number is divisible by 2, 3, or both.
let givenNumber_5 = 9;

if (givenNumber_5 % 2 === 0 && givenNumber_5 % 3 === 0) {
    console.log(`${givenNumber_5} is divisible by 2, 3 both.`);
} else if (givenNumber_5 % 2 === 0) {
    console.log(`${givenNumber_5} is divisible by 2 only.`);
} else if (givenNumber_5 % 3 === 0) {
    console.log(`${givenNumber_5} is divisible by 3 only.`);
} else {
    console.log(`${givenNumber_5} neither divisible by 2 nor 3.`);
};

// ========================================================================================================================================================
// 6. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
let currentTime_6 = new Date().getHours();

if (currentTime_6 >= 5 && currentTime_6 <= 11) {
    console.log(`Good Morning`);
} else if (currentTime_6 > 11 && currentTime_6 <= 16) {
    console.log(`Good Afternoon`);
} else if (currentTime_6 > 16 && currentTime_6 <= 20) {
    console.log(`Good Evening`);
} else {
    console.log(`Good Night`);
};

// ========================================================================================================================================================
// 7. Find whether a number is a multiple of 10.
let givenNumber_7 = 20;

if(givenNumber_7 % 10 === 0) {
    console.log(`${givenNumber_7} is a multiple of 10.`);
} else {
    console.log(`${givenNumber_7} is not a multiple of 10`);
};

// ========================================================================================================================================================
// 8. Create a simple discount calculator.
let productPrice_8 = 8000;
let discountPrice_8;

if (productPrice_8 <= 3000) {
    discountPrice_8 = productPrice_8;
    console.log(`Final price: ₹${discountPrice_8}`);
} else if (productPrice_8 > 3000 && productPrice_8 <= 5000) {
    discountPrice_8 = (productPrice_8 - (productPrice_8 * (2 / 100)));
    console.log(`Final price after Discount: ₹${discountPrice_8}`);
} else if (productPrice_8 > 5000 && productPrice_8 <= 7000) {
    discountPrice_8 = (productPrice_8 - (productPrice_8 * (5 / 100)));
    console.log(`Final price after Discount: ₹${discountPrice_8}`);
} else {
    discountPrice_8 = (productPrice_8 - (productPrice_8 * (10 / 100)));
    console.log(`Final price after Discount: ₹${discountPrice_8}`);
};

// ========================================================================================================================================================
// 9. Check whether a product is in stock.
let mobileStock_9 = 10;
let laptopStock_9 = 0;
let tabletStock_9 = 0;

if (mobileStock_9 !== 0  && laptopStock_9 !== 0 && tabletStock_9 !== 0) {
    console.log(`All products are in stock.`);
};
if (mobileStock_9 === 0) {
    console.log(`Mobile is Out of Stock.`);
};
if (laptopStock_9 === 0) {
    console.log(`Laptop are out of Stock.`);
};
if (tabletStock_9 === 0){
    console.log(`Tablets are out of Stock.`);
};

// ========================================================================================================================================================
// 10. Calculate final bill after GST.
let totalAmount_10 = 5000;
let GST_10 = 18;

let GST_amount_10 = (totalAmount_10 * (GST_10 / 100));
let finalAmount_10 = totalAmount_10 + GST_amount_10;

console.log(`Final bill after GST: ₹${finalAmount_10}`);

// ========================================================================================================================================================
// 11. Compare two ages and announce who is older.
let firstPersonAge_11 = 54;
let secondPersonAge_11 = 54;

let olderPerson_11 = firstPersonAge_11 > secondPersonAge_11 ? `${firstPersonAge_11} years is Older than ${secondPersonAge_11} years.` : firstPersonAge_11 === secondPersonAge_11 ? `Both are of same age group.` : `${secondPersonAge_11} years is older than ${firstPersonAge_11} years.`;

console.log(olderPerson_11);

// ========================================================================================================================================================
// 12. Determine whether a number falls between 1 and 1000.
let givenNumber_12 = 34;

let numberPresent_12 = givenNumber_12 >= 1 && givenNumber_12 <= 1000 ? `${givenNumber_12} falls between 1 and 1000` : `${givenNumber_12} does not falls between 1 and 1000`;

console.log(numberPresent_12);

// ========================================================================================================================================================
// 13. Determine whether a phone number has exactly 10 digits.
let phoneNumber_13 = "0987456321";

if (phoneNumber_13.length === 10) {
    console.log(`Given Phone number is exactly of 10 digits.`);
} else {
    console.log(`Given Phone number length is: ${phoneNumber_13.length}, which is not acceptable.`);
};

// ========================================================================================================================================================
// 14. Decide if someone is eligible for a library card:
// - age ≥ 12
// - has valid ID = true
let userAge_14 = 12;
let hasValidID_14 = true;

if (userAge_14 < 12 && !hasValidID_14) {
    console.log(`User is not eligible for a library card.`);
} else if (userAge_14 < 12 && hasValidID_14) {
    console.log(`User is not eligible because age is not acceptable.`);
} else if (userAge_14 >= 12 && !hasValidID_14) {
    console.log(`User is not eligible because they don't have a valid ID.`);
} else {
    console.log(`User is eligible for a library card.`);
};

// ========================================================================================================================================================
// 15. Determine if a number is divisible by 5, 9, or both.
let givenNumber_15 = 21;

if (givenNumber_15 % 5 === 0 && givenNumber_15 % 9 === 0) {
    console.log(`${givenNumber_15} is divisible by 5, 9 both.`);
} else if (givenNumber_15 % 5 === 0){
    console.log(`${givenNumber_15} is divisible by 5 only.`);
} else if (givenNumber_15 % 9 === 0) {
    console.log(`${givenNumber_15} is divisible by 9 only.`);
} else {
    console.log(`${givenNumber_15} is neither divisible by both 5 nor 9.`);
};

// ========================================================================================================================================================
// 16. Output "Open" or "Closed" for a shop based on the current hour.
let currentTime_16 = new Date().getHours();

if (currentTime_16 >= 7 && currentTime_16 <= 21) {
    console.log(`Currently Shop is OPEN`);
} else {
    console.log(`Currently Shop is CLOSED.`);
};

// ========================================================================================================================================================
// 17. Determine whether a number is a multiple of 7.
let givenNumber_17 = 42;

if (givenNumber_17 % 7 === 0) {
    console.log(`${givenNumber_17} is a multiple of 7.`);
} else {
    console.log(`${givenNumber_7} is not a multiple of 7.`);
};

// ========================================================================================================================================================
// 18. Build a basic coupon code calculator (percentage off based on code type).
let couponCode_18 = "SAVE30";
let productPrice_18 = 2000
let finalPrice_18;

switch(couponCode_18){
    case "SAVE10":
        finalPrice_18 = (productPrice_18 - (productPrice_18 * (10 / 100)));
        console.log(`Final price after applied "${couponCode_18}" coupon code is: ₹${finalPrice_18}`);
        break;

    case "SAVE20":
        finalPrice_18 = (productPrice_18 - (productPrice_18 * (20 / 100)));
        console.log(`Final price after applied "${couponCode_18}" coupon code is: ₹${finalPrice_18}`);
        break;

    case "SAVE30":
        finalPrice_18 = (productPrice_18 - (productPrice_18 * (30 / 100)));
        console.log(`Final price after applied "${couponCode_18}" coupon code is: ₹${finalPrice_18}`);
        break;

    default:
        console.log(`No coupon code applied, Final price: ₹${productPrice_18}`);
};

// ========================================================================================================================================================
// 19. Determine whether a flight has available seats remaining.
let totalSeats_19 = 200;
let confirmedSeats_19 = 200;
let remainingSeats_19 = totalSeats_19 - confirmedSeats_19;

let availableSeats_19 = remainingSeats_19 > 0 ? `${remainingSeats_19} seats are Available` : remainingSeats_19 < 0 ? `Something went wrong, try later` : `Currently no seat is available, visit after sometimes...`;

console.log(availableSeats_19);

// ========================================================================================================================================================
// 20. Compute the take-home pay after deducting a fixed insurance amount.
let totalIncome_20 = 2000;
let fixedInsuranceAmount_20 = 300;

let remainingAmount_20 = totalIncome_20 - fixedInsuranceAmount_20;

console.log(`Remaining amount after fixed insurance deduction is: ₹${remainingAmount_20}`);