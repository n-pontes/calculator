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

// Displays the number clicked
const displayValue = () => {
    const outputText = (num1 !== null ? num1 : '') + (operator !== null ? ' ' + operator : '') + (num2 !== null ? ' ' + num2 : '');
    displayArea.value = outputText; // Correct for input
};

// Detects which button was clicked and assigns it to a variable
const operateBtn = (e) => {
    const btn = e.target.textContent;
    if (btn >= '0' && btn <= '9') {
        if (num1 === null) {
            num1 = parseInt(btn);
        } else if (operator === null) {
            num1 = num1 * 10 + parseInt(btn);
        } else if (num2 === null) {
            num2 = parseInt(btn);
        } else {
            num2 = num2 * 10 + parseInt(btn);
        }

        displayValue();
    } else if (btn === 'AC') {
        num1 = null;
        num2 = null;
        operator = null;
        displayArea.value = ''; // Correct for input
    } else if (btn === '=') {
        if (num1 !== null && num2 !== null && operator !== null) {
            result = operate(operator, num1, num2);
            displayArea.value = result; // Show result in display
            num1 = result; // Prepare for next calculation
            num2 = null;
            operator = null;
        }
    } else if (btn === 'DEL') {
        // Check if num2 exists, otherwise modify num1
        if (num2 !== null) {
            num2 = Math.floor(num2 / 10); // Remove last digit from num2
        } else if (operator === null && num1 !== null) {
            num1 = Math.floor(num1 / 10); // Remove last digit from num1
        }
        displayArea.value = displayArea.value.slice(0, -1); // Update display
    } else if (btn === '√') {
        // Check if operator is null, apply square root to num1
        if (operator === null && num1 !== null) {
            num1 = Math.sqrt(num1); // Calculate square root of num1
            displayArea.value = num1;
        } else if (num2 !== null) {
            // If num2 is present, apply square root to num2
            num2 = Math.sqrt(num2);
            displayArea.value = num2;
        }
    } else {
        operator = btn;
        displayValue();
    }
};

calcBtn.forEach((btn) => {
    btn.addEventListener("click", operateBtn);
});

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