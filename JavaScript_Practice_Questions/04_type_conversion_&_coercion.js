// ============================================================== Type Conversion & Coercion ==============================================================

// 1. Convert the string `"50"` into a number.
let givenString = "50";

// Using parseInt
let convertNumber = parseInt(givenString);
console.log(typeof (convertNumber));

// Using + sign
let anotherConversion = +givenString;
console.log(typeof (anotherConversion));

// Using Number keyword
let anotherConversion_2 = Number(givenString);
console.log(typeof (anotherConversion_2));





// ========================================================================================================================================================
// 2. Convert the number `100` into a string.
let givenNumber = 100;
console.log(typeof (givenNumber));

let convertNumber_1 = givenNumber.toString();
console.log(typeof (convertNumber_1));

let convertNumber_2 = '' + givenNumber;
console.log(typeof (convertNumber_2));





// ========================================================================================================================================================
// 3. Convert `"true"` into a boolean.
let given = true;
console.log(typeof (given));





// ========================================================================================================================================================
// 4. Check the output of:
- `"5" + 2`
    - `"5" - 2`
    - `true + 1`

console.log("5" + 2);
console.log("5" - 2);
console.log("true" + 1);





// ========================================================================================================================================================
// 5. Create a variable with value `"123abc"` and convert it into a number.
let newVariable = "123abc";

let convrtNewVariable = Number(newVariable);
console.log(typeof (convrtNewVariable));





// ========================================================================================================================================================
// 6. Use `parseInt()` on `"500px"`.
let givenPixelValue = "500px";

let convertedPixel = parseInt(givenPixelValue);
console.log(typeof (convertedPixel));





// ========================================================================================================================================================
// 7. Turn the string "88" into a number type.
let givenString_7 = "88";

let convertNumber_7 = Number(givenString_7);
console.log(typeof (convertNumber_7));





// ========================================================================================================================================================
// 8. Turn the number 365 into a string type.
let givenNumber_8 = 365;

let convertNumber_8 = String(givenNumber_8);
console.log(typeof (convertNumber_8));





// ========================================================================================================================================================
// 9. Turn the string "false" into a boolean.
let givenString_9 = "false";

let convertGivenString_9 = givenString_9 === "true";
console.log(convertGivenString_9);





// ========================================================================================================================================================
// 10. Predict and check the result of:
// - "7" + 3
// - "7" - 3
// - false + 1

console.log("7" + 3);
console.log("7" - 3);
console.log(false + 1);






// ========================================================================================================================================================
// 11. Take the value "42kmph" and convert it into a usable number.
let givenValue_11 = "42Kmph";

let convertGivenValue_11 = parseInt(givenValue_11);
console.log(convertGivenValue_11);





// ========================================================================================================================================================
// 12. Apply parseInt() to the string "100km".
let givenString_12 = "100Km";

let convertGivenString_12 = parseInt(givenString_12);
console.log(convertGivenString_12);