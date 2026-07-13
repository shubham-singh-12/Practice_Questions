// ========================================================================================================================================================
// ================================================================= PART 3 - ARRAY BASIC =================================================================
// ========================================================================================================================================================

// ======================================================================= Beginner =======================================================================
// 1. Create an array of 5 fruits.
let fruits_1 = ["apple", "mango", "grapes", "banana", "kiwi"];

// ========================================================================================================================================================
// 2. Print first and last element of array.
let arr_2 = [1, 2, 3, 4, 5];

console.log(arr_2[0]);
console.log(arr_2[arr_2.length - 1]);

// ========================================================================================================================================================
// 3. Find length of array.
let arr_3 = ["Shubham", "Banana", 1, 2, true, "Singh"];

console.log(arr_3.length);

// ========================================================================================================================================================
// 4. Add element at end using `push`.
let arr_4 = [1, 2, 3, 4, 5, 6];
arr_4.push("Shubham");

console.log(arr_4);

// ========================================================================================================================================================
// 5. Remove last element using `pop`.
let arr_5 = [1, 2, 3, 4, 5, 6];
arr_5.pop();

console.log(arr_5);

// ========================================================================================================================================================
// 6. Add element at beginning using `unshift`.
let arr_6 = [1, 2, 3, 4, 5, 6];
arr_6.unshift("Shubham");

console.log(arr_6);

// ========================================================================================================================================================
// 7. Remove first element using `shift`.
let arr_7 = [1, 2, 3, 4, 5, 6];
arr_7.shift();

console.log(arr_7);

// ========================================================================================================================================================
// 8. Reverse an array.
let arr_8 = [1, 2, 3, 4, 5, 6];
let reversedArr_8 = [...arr_8].reverse();

console.log(arr_8);
console.log(reversedArr_8);

// ========================================================================================================================================================
// 9. Sort numbers ascending.
let arr_9 = [1, 10, 2, 9, 5, 8, 4];

arr_9.sort(function (a, b) {
    return a - b;
});

console.log(arr_9);

// ========================================================================================================================================================
// 10. Sort numbers descending.
let arr_10 = [1, 10, 2, 9, 5, 8, 4];

arr_10.sort(function (a, b) {
    return b - a;
});

console.log(arr_10);

// ========================================================================================================================================================
// ===================================================================== Intermediate =====================================================================
// ========================================================================================================================================================
// 11. Use `splice` to remove elements.
let arr_11 = [1, 2, 3, 4, 5, 6];
arr_11.splice(0, 3);

console.log(arr_11);

// ========================================================================================================================================================
// 12. Use `splice` to insert elements.
let arr_12 = [1, 2, 3, 4, 5, 6];
arr_12.splice(1, 0, "Shubham", "Shivam", "Shourya");

console.log(arr_12);

// ========================================================================================================================================================
// 13. Use `slice` to copy array.
let arr_13 = [1, 2, 3, "Shubham", "Shourya", true, 5, 6];
let copiedArr_13 = arr_13.slice();

console.log(arr_13);
console.log(copiedArr_13);

// ========================================================================================================================================================
// 14. Find index of an element.
let arr_14 = [1, 2, "Apple", "Shubham", null, 3, 4, 6];

console.log(arr_14.indexOf(1));
console.log(arr_14.indexOf(2));
console.log(arr_14.indexOf("Apple"));
console.log(arr_14.indexOf("Shubham"));
console.log(arr_14.indexOf(null));
console.log(arr_14.indexOf(3));
console.log(arr_14.indexOf(4));
console.log(arr_14.indexOf(6));

// ========================================================================================================================================================
// 15. Check if array contains a value.
let arr_15 = [1, 2, "Apple", "Shubham", null, 3, 4, 6];

console.log(arr_15.includes(1));
console.log(arr_15.includes(2));
console.log(arr_15.includes("Apple"));
console.log(arr_15.includes("Shivam"));
console.log(arr_15.includes(3));
console.log(arr_15.includes("Banana"));
console.log(arr_15.includes("grapes"));

// ========================================================================================================================================================
// 16. Join array elements with .
let arr_16 = [1, 2, 3, 4, 5, 6];

console.log(arr_16.join("."));

// ========================================================================================================================================================
// 17. Merge two arrays using spread operator.
let firstArr_17 = [1, 2, 3];
let secondArr_17 = ["Shubham", "Shivam", "Shourya"];

let mergedArr_17 = [...firstArr_17, ...secondArr_17];

console.log(mergedArr_17);

// ========================================================================================================================================================
// 18. Copy array using spread operator.
let arr_18 = [1, 2, 3];

let copyArr_18 = [...arr_18];
copyArr_18.push(12);

console.log(arr_18);
console.log(copyArr_18);

// ========================================================================================================================================================
// 19. Find maximum value using `Math.max`.
let arr_19 = [1, 2, 3, 4, 5, 6];

console.log(Math.max(...arr_19));

// ========================================================================================================================================================
// 20. Swap two variables using destructuring.

// ========================================================================================================================================================
// =========================================================== PART 4 - ARRAY ITERATION METHODS ===========================================================
// ========================================================================================================================================================
// 21. Use `forEach` to print all numbers doubled.
let arr_21 = [1, 2, 3, 4, 5, 6];

arr_21.forEach(function (currVal) {
    console.log(currVal * 2);
});

// ========================================================================================================================================================
// 22. Use `map` to square all numbers.
let arr_22 = [1, 2, 3, 4, 5, 6];
let square_22 = arr_22.map(function (currVal) {
    return currVal ** 2;
});

console.log(square_22);

// ========================================================================================================================================================
// 23. Use `filter` to get even numbers.
let arr_23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumber_23 = arr_23.filter(function (currVal) {
    return currVal % 2 === 0;
});

console.log(evenNumber_23);

// ========================================================================================================================================================
// 24. Use `reduce` to calculate sum.
let arr_24 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum_24 = arr_24.reduce(function (acc, currVal) {
    return acc + currVal;
}, 0);

console.log(sum_24);

// ========================================================================================================================================================
// 25. Use `reduce` to find maximum number.
let arr_25 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maxNum_25 = arr_25.reduce(function (acc, currVal) {
    if (acc > currVal) {
        return acc;
    } else {
        return currVal;
    }
}, arr_25[0]);

console.log(maxNum_25);

// ========================================================================================================================================================
// 26. Use `find` to get first even number.
let arr_26 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstEvenNumber_26 = arr_26.find(function (currVal) {
    return currVal % 2 === 0;
});

console.log(firstEvenNumber_26);

// ========================================================================================================================================================
// 27. Use `findIndex` to locate number > 50.
let arr_27 = [1, 10, 20, 50, 60, 70];

let greaterNumber_27 = arr_27.findIndex(function (currVal) {
    return currVal > 50;
});

console.log(greaterNumber_27);

// ========================================================================================================================================================
// 28. Use `some` to check if any number is negative.
let arr_28 = [1, 2, 3, 4, -5, -7, 8, 9];

let checkNegative_28 = arr_28.some(function (elem) {
    return elem < 0;
});

console.log(checkNegative_28);

// ========================================================================================================================================================
// 29. Use `every` to check if all numbers are positive.
let arr_29 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];

let chechPositive_29 = arr_29.every(function (elem) {
    return elem >= 0;
});

console.log(chechPositive_29);

// ========================================================================================================================================================
// 30. Create array of names and convert all to uppercase.
let arr_30 = ["shubham", "shivam", "shourya", "deepak", "ajay"];

let uppercaseNames_30 = arr_30.map(function (currVal) {
    return currVal.toUpperCase();
});

console.log(uppercaseNames_30);

// ========================================================================================================================================================
// 31. Filter all students with marks > 80.
let arr_31 = [20, 40, 56, 78, 86, 89, 97, 95, 40];

let studentMarks_31 = arr_31.filter(function (currVal) {
    return currVal > 80;
});

console.log(studentMarks_31);

// ========================================================================================================================================================
// 32. Calculate average using reduce.
let arr_32 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let average_32 = arr_32.reduce(function (acc, CurrVal) {
    return acc + CurrVal;
}, 0);

console.log(`Average: ${average_32 / arr_32.length}`);

// ========================================================================================================================================================
// 33. Count occurrences of numbers in array.
let arr_33 = [1, 2, 2, 3, 3, 4, 5, 6];
let countArr_33 = {};

arr_33.forEach(function (currVal) {
    if (countArr_33[currVal]) {
        countArr_33[currVal] = countArr_33[currVal] + 1;
    } else {
        countArr_33[currVal] = 1;
    }
});

console.log(countArr_33);

// ========================================================================================================================================================
// 34. Flatten nested arrays using `flat`.
let arr_34 = [1, 2, [3, 4, 5, 6, [7, 8, 9, 1, 2, [3, 4, 5]]]];

console.log(arr_34.flat(Infinity));

// ========================================================================================================================================================
// 35. Remove duplicates using `Set`.
let arr_35 = ["apple", "banana", "grapes", "apple", "banana", "orange", "grapes", "orange"];

let uniqueArr_35 = [...new Set(arr_35)];

console.log(uniqueArr_35);

// ========================================================================================================================================================
// 36. Sort array of objects by age.
let arr_36 = [
    { name: "Amit", age: 25 },
    { name: "Priya", age: 19 },
    { name: "Rahul", age: 34 },
];

let sortedAge_36 = arr_36.sort(function (a, b) {
    return a.age - b.age;
});

console.log(sortedAge_36);

// ========================================================================================================================================================
// 37. Find total price of shopping cart.
let arr_37 = [20, 40, 50, 60 ,70 ,80 ,90 ,100, 120, 140, 160];

let totalPrice_37 = arr_37.reduce(function (acc, currVal) {
    return acc + currVal;
}, 0);

console.log(`Total Price: ${totalPrice_37}`);

// ========================================================================================================================================================
// 38. Group users by age.
let arr_38 = [
    { name: "Amit", age: 25 },
    { name: "Priya", age: 19 },
    { name: "Rahul", age: 25 },
    { name: "Sneha", age: 19 },
];

let groupUserAge_38 = Object.groupBy(arr_38, arr_38 => arr_38.age);

console.log(groupUserAge_38);



// ========================================================================================================================================================
// 39. Chain `filter` and `map`.
let arr_39 = [
    { name: "Amit", age: 25 },
    { name: "Priya", age: 19 },
    { name: "Rahul", age: 25 },
    { name: "Sneha", age: 19 },
];

let age_39 = arr_39.filter(function (currVal) {
    return currVal.age > 19;
}).map(function (userName) {
    return `${userName.name} : ${userName.age}`;
});

console.log(age_39);

// ========================================================================================================================================================
// 40. Explain difference between `map` and `forEach`.
// MAP: map() is an array method that loops through every element of an array, does something to each element, and returns a brand new array with the changed values. map() does not execute the function for empty elements. map() does not change the original array.

// FOREACH: forEach is an array method that loops through every element of an array one by one and runs a function on each element. It is a cleaner modern way to loop an array instead of using a for loop. forEach does not return anything.