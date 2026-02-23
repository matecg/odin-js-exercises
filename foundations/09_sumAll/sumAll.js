const sumAll = function(a, b) {
    if (isNaN(a) || isNaN(b)) return 'ERROR';
    if (typeof(a) !== "number" || typeof(b) !== "number") return 'ERROR';
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';

    return (a + b) * (Math.abs(b - a) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
