// Selects all buttons
const calcBtn = document.querySelectorAll('.btn, .operator-btn');

// Create variable to hold display value, create variable of display area and populate
const displayArea = document.querySelector('#display');

// Stores the current value that is being displayed
let displayValue = '';

// Operator variable
let operator = null;

// Operator numbers
let num1 = null;
let num2 = null;

// Result
let result = null;

// Addition function
const add = (num1, num2) => num1 + num2;
console.log("The result is:", add(1, 6));

// Subtraction function
const sub = (num1, num2) => num1 - num2;
console.log("The result is:", sub(8, 4));

// Multiply function
const multiply = (numb1, num2) => numb1 * num2;
console.log("The result is:", multiply(4, 4));

// Division function
const divide = (num1, num2) => num1 / num2;
console.log("The result is:", divide(50, 5));

// Operate function - determines how calculator
const operate = ((operator, num1, num2) => {
    let result;

    switch ((operator, num1, num2)) {
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