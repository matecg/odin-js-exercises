const removeFromArray = function() {
    const toExclude = [...arguments].slice(1);
    let output = [];
  
    for (const el of arguments[0]) {
        if (toExclude.includes(el)) continue;
        output.push(el);
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
