const removeFromArray = function(array, ...remove) {
    let removed = [];
    for (item of array) {
        if (remove.includes(item)) {
            continue;
        }
        removed.push(item);
    }
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
