// Operator variable

let operator = ['+', '-', '/', '*'];

// Addition function

const add = ((a, b) => {
    return a + b;
});

console.log("The result is:", add(1, 6));

// Subtraction function

const sub = ((a, b) => {
    return a - b;
});

console.log("The result is:", sub(8, 4));

// Multiply function

const multiply = ((numb1, num2) => {
    let result = numb1 * num2;
    return result;
});

console.log("The result is:", multiply(4, 4));

// Division function

const divide = ((a, b) => {
    return a / b;
});

console.log("The result is:", divide(50, 5));