// ========================================================================================================================================================
// ============================================================== TYPE CONVERSION & COERCION ==============================================================
// ========================================================================================================================================================

// 1. Convert the string `"50"` into a number.
let givenString_1 = "50";
let convertedNumber = Number(givenString_1);

console.log(typeof convertedNumber)

// ========================================================================================================================================================
// 2. Convert the number `100` into a string.
let givenNumber_2 = 100;
let convertedString_2 = String(givenNumber_2);

console.log(typeof convertedString_2);

// ========================================================================================================================================================
// 3. Convert `"true"` into a boolean.
let givenString_3 = "true";
let convertedString_3 = Boolean(givenString_3);

console.log(typeof convertedString_3);

// ========================================================================================================================================================
// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

// ========================================================================================================================================================
// 5. Create a variable with value `"123abc"` and convert it into a number.
let variable_5 = "123abc";
let convertedVariable_5 = parseInt(variable_5);

console.log(convertedVariable_5)

// ========================================================================================================================================================
// 6. Use `parseInt()` on `"500px"`.
let givenVariable_6 = "500px";

console.log(parseInt(givenVariable_6));

// ========================================================================================================================================================
// 7. Turn the string "88" into a number type.
let givenString_7 = "88";
let convertedString_7 = Number(givenString_7);

console.log(typeof convertedString_7);

// ========================================================================================================================================================
// 8. Turn the number 365 into a string type.
let givenNumber_8 = 365;
let convertedNumber_8 = String(givenNumber_8);

console.log(typeof convertedNumber_8);

// ========================================================================================================================================================
// 9. Turn the string "false" into a boolean.
let givenString_9 = "false";
let convertedString_9 = Boolean(givenString_9);

console.log(typeof convertedString_9);

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
let convertedValue_11 = parseInt(givenValue_11);

console.log(convertedValue_11);

// ========================================================================================================================================================
// 12. Apply parseInt() to the string "100km".
let givenString_12 = "100Km";
let convertedString_12 = parseInt(givenString_12);

console.log(convertedString_12);