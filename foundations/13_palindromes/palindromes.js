const palindromes = function (string) {
    // First we must remove non alphanumerical characters from the string
    const charOnly = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    const reversed = charOnly.slice().reverse().join('');
    return charOnly.join('') === reversed;
};

// Do not edit below this line
module.exports = palindromes;
