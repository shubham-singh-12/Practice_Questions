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





// ========================================================================================================================================================
// 12. Store a sentence in a variable and print how many characters it has.
let sentence_12 = "This is sentence";

console.log(sentence_12.length);





// ========================================================================================================================================================
// 13. Turn a lowercase sentence into all uppercase.
let lowerCase_sentence_13 = "hello world";
let upperCase_sentence_13 = lowerCase_sentence_13.toUpperCase();

console.log(upperCase_sentence_13);





// ========================================================================================================================================================
// 14. Turn an uppercase sentence into all lowercase.
let upperCase_sentence_14 = "HELLO WORLD";
let lowerCase_sentence_14 = upperCase_sentence_14.toLowerCase();

console.log(lowerCase_sentence_14);





// ========================================================================================================================================================
// 15. Check whether a string contains the word "React".
let givenString_15 = "React is a JavaScript Framework";
let stringContain_15 = givenString_15.includes("React");

console.log(stringContain_15);





// ========================================================================================================================================================
// 16. Pull out the word "Script" from "Java Script Code".
let givenString_16 = "Java Script Code";
let removedString_16 = givenString_16.slice(5, 11);

console.log(removedString_16);





// ========================================================================================================================================================
// 17. Swap "slow" for "fast" inside a sentence.
let givenString_17 = "Turtle is slow";
let swapString_17 = givenString_17.replace("slow", "fast");

console.log(swapString_17);





// ========================================================================================================================================================
// 18. Break apart "Mon,Tue,Wed" into an array using the comma.
let givenString_18 = "Mon, Tue, Wed";
let breakString_18 = givenString_18.split(",");

console.log(breakString_18);





// ========================================================================================================================================================
// 19. Strip the leading and trailing spaces off a messy string.
let givenSentence_19 = "  Hello welcome to the JavaScript Course     ";
let correctSentence_19 = givenSentence_19.trim();

console.log(correctSentence_19);





// ========================================================================================================================================================
// 20. Print the word "Yo" repeated 3 times.
let givenWord_20 = "Yo";
let repeatWord_20 = givenWord_20.repeat(3);

console.log(repeatWord_20);





// ========================================================================================================================================================
// 21. Print the last letter of a word.
let givenLetter_21 = "Hello World";
let lastLetter_21 = givenLetter_21[givenLetter_21.length - 1];

console.log(lastLetter_21);





// ========================================================================================================================================================
// 22. Use a template literal to output: "Welcome back, Priya! You have 5 new messages."
let userName_22 = "Priya";
let newMessage = 5;

let complete_info = `Welcome back, ${userName_22}! You have ${newMessage} new messages`;

console.log(complete_info);