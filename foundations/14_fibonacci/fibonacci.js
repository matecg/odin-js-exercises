const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return "OOPS"
    if (n === 1 || n === 2) return 1;
    if (n === 0) return 0;
    let current = 1;
    for (let i = 2, previous = 1; i < n; i++) {
        current += previous;
        previous = current - previous;
    }
    return current;
    // Recursion is slower than loops for higher inputs
    //return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
