const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } 

    if (Math.floor(num1) !== num1 || Math.floor(num2) !== num2) {
        return 'ERROR';
    }

    if (typeof num1 !== 'number' || typeof num1 !== 'number') {
        return 'ERROR';
    }

    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
