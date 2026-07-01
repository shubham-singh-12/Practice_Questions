// ========================================================== BEGINNER LEVEL FUNCTIONS QUESTIONS ==========================================================
// 1. Create a function named `greet` that prints `"Hello World"`.
function greet() {
    console.log("Hello, World!!!");
};

greet();





// ========================================================================================================================================================
// 2. Create a function `add(a, b)` that returns the sum.
function add(a, b) {
    console.log(`${a + b}`);
    return `a + b`;
};

add(5, 6);





// ========================================================================================================================================================
// 3. Write a function to calculate the square of a number.
function calculateSquare(userNumber_3) {
    let square = (userNumber_3 ** 2);

    console.log(square);                    // For console only.
    return square;                          // For real world practice
};

calculateSquare(5);





// ========================================================================================================================================================
// 4. Create a function that checks whether a number is even or odd.
function checkEvenOdd(userNumber_4) {
    if (userNumber_4 % 2 === 0) {
        console.log(`${userNumber_4} is Even.`);        // For console only
        // return `${userNumber_4} is Even.`;
    } else {
        console.log(`${userNumber_4} is Odd.`);         // For real world practice
        // return `${userNumber_4} is Odd.`;
    }
};

checkEvenOdd(23);





// ========================================================================================================================================================
// 5. Write a function that converts Celsius to Fahrenheit.
function convertTempUnit(givenTempUnit_5) {
    let tempInFahrenheit = ((givenTempUnit_5 * (9 / 5)) + 32).toFixed(2);

    console.log(`${givenTempUnit_5}°C = ${tempInFahrenheit}°F`);        // For console only
    // return `${givenTempUnit_5}°C = ${tempInFahrenheit}°F`;              // For real world practice
};

convertTempUnit(0);





// ========================================================================================================================================================
// 6. Create a function with default parameter `"Guest"`.
function greet_6(userName_6 = "Guest") {
    console.log(`Welcome, ${userName_6}`);              // For console only
    // return `Welcome, ${userName_6}`;                    // For real world practice
};

greet_6("Shubham");
greet_6();





// ========================================================================================================================================================
// 7. Write a function that returns the greater of two numbers.
function greatestNumber_7(firstNumber_7, secondNumber_7) {
    if (firstNumber_7 > secondNumber_7) {
        console.log(`${firstNumber_7} is greater than ${secondNumber_7}`);          // For console only
        // return `${firstNumber_7} is greater than ${secondNumber_7}`;                // For real world practice
    } else if (firstNumber_7 < secondNumber_7){
        console.log(`${firstNumber_7} is smaller than ${secondNumber_7}`);          // For console only
        // return `${firstNumber_7} is smaller than ${secondNumber_7}`;                // For real world practice
    } else {
        console.log(`Both are Equal`);          // For console only
        // return `Both are Equal`;                // For real world practice
    }
};

greatestNumber_7(2, 3);
greatestNumber_7(5, 4);
greatestNumber_7(5, 5);





// ========================================================================================================================================================
// 8. Create a function to calculate area of rectangle.
function areaOfRectangle_8(length, width) {
    let area = (length * width);

    console.log(`Area of Rectangle: ${area}`);          // For console only
    // return `Area of Rectangle: ${area}`;                // For real world practice
};

areaOfRectangle_8(2, 6);





// ========================================================================================================================================================
// 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
function checkAge_9(userAge_9) {
    if (userAge_9 >= 18) {
        console.log(`User age is ${userAge_9}, Adult.`);        // For console.only
        // return `User age is ${userAge_9}, Adult.`;              // For real world practice
    } else {
        console.log(`User age is ${userAge_9}, Minor.`);        // For console.only
        // return `User age is ${userAge_9}, Minor.`;              // For real world practice
    }
};

checkAge_9(18);
checkAge_9(17);
checkAge_9(20);





// ========================================================================================================================================================
// 10. Create a function to reverse a string.
function reverseString_10(userString_10) {
    let reversedString = userString_10.split("").reverse().join("");

    console.log(`Reversed String: ${reversedString}`);          // For console only
    // return`Reversed String: ${reversedString}`;                 // For real world practice
};

reverseString_10("Shubham");