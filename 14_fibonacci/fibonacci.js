const fibonacci = function(n) {
    n = parseInt(n);

    if (n === 0) {
        return 0;
    }

    if (n < 0) {
        return "OOPS";
    }

    let first = 0;
    let second = 1;
    for (let i = 1; i < n; i++) {
        let temp = second;
        second += first;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
