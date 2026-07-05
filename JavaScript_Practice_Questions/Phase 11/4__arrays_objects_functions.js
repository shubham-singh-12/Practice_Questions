// ========================================================================================================================================================
// ============================================================= ARRAYS + OBJECTS + FUNCTIONS =============================================================
// ========================================================================================================================================================

// ======================================================================== EASY ==========================================================================
/*
// 1. Create a function that return only users whose age is 18 or above.
let users = [
{name: "Shubham", age: 20},
{name: "Aman", age: 16},
{name: "Priya", age: 25}
];

Function name: getAdults(user)

OUTPUT:
[
{name: "Shubham", age: 20},
{name: "Priya", age: 25}
]
*/

// ========================================================================================================================================================
/*
2. Create a function for product names extractor
Function name: getProductNames(products)

Example:
[
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 500}
]

Return: ["Laptop", "Mouse"]
*/

// ========================================================================================================================================================
/*
3. Create a function to find user by name
let users = [
    {name: "Shubham"},
    {name: "Ritik"},
    {name: Aman},
    {name: "Priya"}
];

Function name: findUser(users, username)
*/

// ========================================================================================================================================================
/*
4. Create a function to find total marks
let students = [
    {name: "Shubham", marks: 85},
    {name: "Ritik", marks: 80},
    {name: "Aman", marks: 90},
    {name: "Priya", marks: 70}
];

Function name: getTotalMarks(students)

Return: 240
*/

// ========================================================================================================================================================
/*
5. Create a function that return only products whose stock is greater than zero.

let products = [
    {name: "Mouse", stock: 10},
    {name: "Keyboard", stock: 0},
    {name: "Monitor", stock: 5}
];
*/

// ========================================================================================================================================================
/*
6. Create a function which adds a student to the array.
Function name: addStudent(students, student)
*/

// ========================================================================================================================================================
/*
7. Create a function to count products costing more than ₹10000

let products = [
    {name: "Laptop", price: 50000},
    {name: "Phone", price: 30000},
    {name: "Mouse", price: 500}
];
*/

// ========================================================================================================================================================
// ======================================================================= MODERATE =======================================================================
/*
8. Create a function that calculate total bill.
let cart = [
    { name: "Mouse", price: 500, qty: 2 },
    { name: "Keyboard", price: 1000, qty: 1 },
    { name: "Monitor", price: 1000, qty: 1 },
];

Function name: getCartTotal(cart)
Output: 12000
*/

// ========================================================================================================================================================
/*
9. Create a function to return average for each student
Function name: getAveragemarks(students)

let students = [
    {name: "Shubham", marks: [86, 70, 48]},
    {name: "Ritik", marks: [80, 90, 85]},
    {name: "Aman", marks: [70, 75, 80]}
];
*/

// ========================================================================================================================================================
/*
10. Create a function to find product with id
Function name: findroductId(id)

let inventory = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Mouse"},
    {id: 3, name: "Monitor"}
];
*/

// ========================================================================================================================================================
/*
11. Create a function to generate username
let users = [
    {name: "Shubham Singh"},
    {name: "Ritik Rajput"},
    {name: "Aman Gupta"}
];

Return:
[
    "shubham_singh",
    "ritik_rajput",
    "aman_gupta"
]
*/

// ========================================================================================================================================================
/*
12. Create a function to find the highest scorer.

let students = [
    {name: "Shubham", marks: 90},
    {name: "Ritik", marks: 85},
    {name: "Aman", marks: 95},
    {name: "Priya", marks: 75},
];
*/

// ========================================================================================================================================================
/*
13. Create a function to update product stock
Function name: updateStock(id, quantity)
*/

// ========================================================================================================================================================
/*
14. Create a function to sort students by marks from highest to lowest

[
    {name: "A", marks: 70},
    {name: "B", marks: 95},
    {name: "C", marks: 80},
]
*/

// ========================================================================================================================================================
// ======================================================================== HARD ==========================================================================
/*
15. Create a function that calculate average, decide grade, create a new object, return a new array:

let students = [
{name: "Shubham", marks: [80, 90, 85]},
{name: "Aman", marks: [50, 40, 60]},
];

Function name: generateReport(students)

Return:
[
{name: "Shubham", average: 85, grade: "A"},
{name: "Aman", average: 50, grade: "C"}
]
*/

// ========================================================================================================================================================
/*
16. Create a function to find Revenue per product, total revenue, best selling product.

let products = [
    {
    name: "Mouse",
    price: 500,
    sold: 20
    },
    {
    name: "Keyboard",
    price: 1000,
    sold: 10
    }
];
*/

// ========================================================================================================================================================
/*
17. Create a function for School Attendance Portal

let students = [
    {name: "Shubham", present: true},
    {name: "Ritik", present: false},
    {name: "Aman", present: false},
    {name: "Priya", present: true}
];

countPresent()
countAbsent()
getPresentStudents()
*/

// ========================================================================================================================================================
// ====================================================================== VERY HARD =======================================================================
/*
18. Mini Library Management System

Store books like:
{
    id: 1,
    title: "Atomic habits",
    borrowed: false
}

Create:
addBook()
borrowBook()
returnbook()
showAvaliableBooks()
*/

// ========================================================================================================================================================
/*
19. Create a function for order management system

Store orders like:
{
    id: 1,
    customer: "Shubham",
    amount: 5000,
    status: "Pending"
}

Create:
creatOrder()
updateStatus()
getPendingOrders()
getCompleteOrders()
*/

// ========================================================================================================================================================
/*
20. Mini E-commerce System

Create a system with:
addProduct()
removeProduct()
updateStock()
purchaseProduct()
getInventoryValue()

Store products like:
{
    id: 1,
    name: "Laptop",
    price: 50000,
    stock: 10
}
*/