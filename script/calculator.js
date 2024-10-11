// Operator variable
let operator = ['+', '-', '/', '*'];

// Operator numbers
let num1 = 0;
let num2 = 0;

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

// Operate function
const operate = ((operator, num1, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
});