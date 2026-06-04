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