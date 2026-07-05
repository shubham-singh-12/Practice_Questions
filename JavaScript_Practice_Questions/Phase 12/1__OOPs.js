// ========================================================================================================================================================
// ========================================================================= OOPS =========================================================================
// ========================================================================================================================================================

// ========================================================================= EASY =========================================================================

/*
1. What will be printed when: 
user.greet()

const user = {
    name: "Shubham",
    greet() {
        console.log(this.name);
    }
};
*/

// ========================================================================================================================================================
/*
2. What will be printed ?
Also explain the difference between:
- Browser
- Node.js
- Strict Mode

fundtion show() {
    console.log(this);
};

show();
*/

// ========================================================================================================================================================
/*
3. What is the output: 

function introduce() {
    console.log(this.name);
}

const person = {
    name: "Shubham"
};

Expected Output: Shubham
*/

// ========================================================================================================================================================
/*
4. Call the function using: apply()

function introduce(city, country) {
    console.log(`${this.name} from${city}`);
}

const person = {
    name: "Shubham"
};
*/

// ========================================================================================================================================================
// ======================================================================= MODERATE =======================================================================

/*
5. 
const user = {
    name: "Shubham",
    greet() {
        console.log(this.name);
    }
};


const fn = user.greet;
fn();


This code prints:
undefined

Fix it using bind()
*/

// ========================================================================================================================================================
/*
6. Create an Inheritance Chain

const animal = {
    eats: true
};

Then create:
const dog
using Object.create()

The dog object should inherit
eats
from animal
*/

// ========================================================================================================================================================
/*
7. Create:

function Person(name) {
    this.name = name;
};

Add;
greet()

using:
Person.prototype

So every person Object can use it.
*/

// ========================================================================================================================================================
// ========================================================================= HARD =========================================================================

/*
8. Create a class:
class Student

Properties:
name
marks

Methods:
getGrade()

Rules:
90+ => A
75+ => B
60+ => C
Otherwise => F
*/

// ========================================================================================================================================================
/*
9. Create:
class Employee

Properties:
name
salary

Method:
work()

Then create:
class Developer
that extends Employee

Add:
code()
method.
*/

// ========================================================================================================================================================
/*
10. Create:
class BankAccount

Requirements:

Private Field
#balance

Mathods
deposit(amount)
withdraw(amount)
getBalance()

Rule:
- cannot withdraw more than available balance.
- Balance should never be directly accessible.

Example:
const acc = newBankAccount();
acc.deposit(1000);
acc.withdraw(300);
console.log(acc.getBalance());

Output: 700
*/

// ========================================================================================================================================================
// ======================================================================== BONUS =========================================================================

/*
Create a complete:
Library Management System
using classes.

Class: Book
Properties
title
authot
borrowed

Class: Library
Methods:
addBook()
borrowBook()
returnBook()
showAvailableBooks()
*/