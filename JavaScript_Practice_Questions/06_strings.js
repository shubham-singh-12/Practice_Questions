// ======================================================================== STRING ========================================================================

// 1. Create a string and print its length.
let userString_1 = "Shubham Singh";
console.log(userString_1.length);





// ========================================================================================================================================================
// 2. Convert a string into uppercase.
let userString_2 = "Shubham Singh";
console.log(userString_2.toUpperCase());





// ========================================================================================================================================================
// 3. Convert a string into lowercase.
let userString_3 = "Shubham Singh";
console.log(userString_3.toLowerCase());





// ========================================================================================================================================================
// 4. Check if a string includes the word `"JavaScript"`.
let userString_4 = "Hello, JavaScript";
console.log(userString_4.includes("JavaScript"));





// ========================================================================================================================================================
// 5. Extract the word `"World"` from `"Hello World"`.
let userString_5 = "Hello World";
console.log(userString_5.slice(6, userString_5.length));





// ========================================================================================================================================================
// 6. Replace `"apple"` with `"mango"` in a sentence.
let userString_6 = "Eat apple everyday";
console.log(userString_6.replace("apple", "mango"));





// ========================================================================================================================================================
// 7. Split `"HTML,CSS,JS"` into an array.
let userString_7 = "HTML, CSS, JS";
console.log(userString_7.split(","))





// ========================================================================================================================================================
// 8. Remove extra spaces from a string.
let userString_8 = "            Hello World, Welcome Back          ";
console.log(userString_8.trim());





// ========================================================================================================================================================
// 9. Repeat the word `"Hi"` 5 times.
let userString_9 = "Hi";
console.log(userString_9.repeat(5));





// ========================================================================================================================================================
// 10. Print the first character of a string.
let userString_10 = "Shubham Singh";
console.log(userString_10.charAt(0));





// ========================================================================================================================================================
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
let userName = "Aman";
let userAge = 20;

let userInfo = `My name is ${userName} and I am ${userAge} years old`;

console.log(userInfo);