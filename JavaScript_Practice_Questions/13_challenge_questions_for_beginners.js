// ========================================================== CHALLENGE QUESTIONS FOR BEGINNERS ==========================================================


// 1. Generate a random OTP of 4 digits.
let randomNumber = Math.floor((Math.random() * 9000) + 1000);
console.log(randomNumber);





// ================================================================
// 2. Reverse a 3-letter string manually.

let userString_2 = "Cat".toLowerCase();

console.log(userString_2.charAt(2) + userString_2.charAt(1) + userString_2.charAt(0));





// ================================================================
// 3. Find the last character of a string.
let userString = "Shubham";

let lastCharacter = (userString.charAt(userString.length - 1));

console.log(lastCharacter)





// ================================================================
// 4. Convert a full name into uppercase initials.

let userName_4 = "Arjun Sharma";

let uppercaseInitials = userName_4[0].toUpperCase() + "." + userName_4[userName_4.indexOf(" ") + 1].toUpperCase();

console.log(uppercaseInitials);





// ================================================================
// 5. Check whether two strings are equal ignoring case sensitivity.

let string_1 = "Shubham";
let string_2 = "Shubham";

if (string_1.toUpperCase() == string_2.toUpperCase()) {
    console.log(`Both strings are equal`);
} else {
    console.log(`Strings are not equal`)
}





// ================================================================
// 5. Create a simple login validation system.

let userName_5 = "Shubham";
let userPassword = "shubham@123";

if (userName_5 === "shubham" & userPassword === "shubham@123") {
    console.log(`Welcome ${userName_5}`);
} else {
    console.log(`Either username or password is wrong!!!`);
}





// ================================================================
// 6. Find whether a number is a 2-digit or 3-digit number.

let userChoosenNumber = 45879;

if (userChoosenNumber >= 0 && userChoosenNumber <= 9) {
    console.log(`${userChoosenNumber} is of 1 digit.`);
} else if (userChoosenNumber >= 10 && userChoosenNumber <= 99) {
    console.log(`${userChoosenNumber} is of 2 digit.`);
} else if (userChoosenNumber >= 100 && userChoosenNumber <= 999) {
    console.log(`${userChoosenNumber} is of 3 digit.`);
} else {
    console.log(`${userChoosenNumber} is of either 4 digit or larger.`);
}





// ================================================================
// 7. Create a mini ATM balance checker.

let account_holder_name = "Shubham";
let userATMPin = 1234;
let account_balance = 12000;
let account_holder_choice = 3;
let amount_to_be_deposit = 2000;
let amount_to_be_withdraw = 15000;

if (userATMPin !== 1234) {
    console.log(`ATM pin is incorrect❌, \nPlease enter Correct PIN`);
} else {
    console.log(`Welcome ${account_holder_name}`);
    console.log(`==============================`);
    console.log(`Press any button: \n-> 1. Check Balance \n-> 2. Deposit Money \n-> 3. Withdraw Money`);
    console.log(`==============================`);

    if (account_holder_choice === 1) {
        console.log(`Balance: ${account_balance}`);
    } else if (account_holder_choice === 2) {
        if (amount_to_be_deposit <= 0) {
            console.log(`Invalid amount ❌`)
        } else {
            account_balance += amount_to_be_deposit;
            console.log(`Balance: ${account_balance}`)
        }
    } else if (account_holder_choice === 3) {
        if (amount_to_be_withdraw > account_balance) {
            console.log(`Invalid Withdrawl ❌`);
            console.log(`Account Balance: ${account_balance}`)
        } else {
            account_balance -= amount_to_be_withdraw;
            console.log(`Balance: ${account_balance}`);
        }
    } else {
        console.log(`Invalid Choice....`);
    }
}





// ================================================================
// 8. Simulate a traffic light system using `switch`.

let trafficLight = "green"

switch (trafficLight) {
    case "red":
        console.log(`🔴 STOP!!!`);
        break;
    case "yellow":
        console.log(`🟡 READY!!!`);
        break;
    case "green":
        console.log(`🟢 GO!!!`);
        break;

    default:
        console.log(`Invalid ${trafficLight} Light choice ❌, \nPlease choose correct`);
}





// ================================================================
// 9. Build a small marksheet generator using variables and conditionals.

function generateMarksheet() {

    let studentName = "Shubham Singh";
    let studentRollNumber = 987654321;

    let englishMarks = 40;
    let scienceMarks = 60;
    let mathMarks = 80;

    let totalMarks = englishMarks + scienceMarks + mathMarks;
    let totalPercentage = (totalMarks / 300) * 100;

    // Check if every subject for pass marks
    let passStatus;
    if (englishMarks < 33) {
        passStatus = `Failed in English, got only ${englishMarks}.`
    } else if (scienceMarks <= 33) {
        passStatus = `Failed in Science, got only ${scienceMarks}.`
    } else if (mathMarks <= 33) {
        passStatus = `Failed in Math, got only ${mathMarks}.`
    } else {
        passStatus = `Passed`;
    }

    // Find the grade bands
    let grade;
    if (totalPercentage >= 90) {
        grade = `Grade A+`;
    } else if (totalPercentage >= 80) {
        grade = `Grade A`;
    } else if (totalPercentage >= 70) {
        grade = `Grade B`;
    } else if (totalPercentage >= 50) {
        grade = `Grade C`;
    } else if (totalPercentage >= 33) {
        grade = `Grade D`;
    } else {
        grade = `Fail`;
    }

    // Print the full marksheet
    console.log(`================== MARKSHEET ==================`);

    console.log(`Name: ${studentName}`);
    console.log(`Roll No: ${studentRollNumber}`);
    console.log(`English: ${englishMarks}`);
    console.log(`Science: ${scienceMarks}`);
    console.log(`Math: ${mathMarks}`);
    console.log(`===============================================`);
    console.log(`Total: ${totalMarks}`);
    console.log(`Percentage: ${totalPercentage}`);
    console.log(`===============================================`);
    console.log(`Status: ${passStatus}`);
    console.log(`Grade: ${grade}`);

    // return { studentName, totalMarks, totalPercentage, passStatus, grade };
};

generateMarksheet();