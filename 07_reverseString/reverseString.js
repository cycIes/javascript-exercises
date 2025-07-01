const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray.reverse();
    const reverse = stringArray.join('');
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
