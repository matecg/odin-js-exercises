const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (numbers) {
    return numbers.reduce((acc, cur) => acc * cur);
};

const power = function (base, exponent) {
    return base ** exponent
};

const factorial = function (num) {
    let output = 1;
    for (let i = 1; i <= num; output *= i, i++);
    return output;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
