const repeatString = function(word, times) {
    if (times < 0) {
        return 'ERROR';
    }
    
    let repeated = '';
    for (let i = 0; i < times; i++) {
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
