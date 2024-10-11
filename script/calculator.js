// Selects all buttons
const calcBtn = document.querySelectorAll('.btn, .operator-btn');

// Create variable to hold display value, create variable of display area and populate
const displayArea = document.querySelector('#display');

// Stores the current value that is being displayed
displayArea.value = ''; // Use value instead of innerHTML for input

// Operator variable
let operator = null;

// Operator numbers
let num1 = null;
let num2 = null;

// Result
let result = null;

// Addition function
const add = (num1, num2) => num1 + num2;

// Subtraction function
const sub = (num1, num2) => num1 - num2;

// Multiply function
const multiply = (numb1, num2) => numb1 * num2;

// Division function with zero check
const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
};

// Operate function - determines how calculator
const operate = ((operator, num1, num2) => {
    let result;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = sub(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            return "Invalid operator";
    }
    return result;
});