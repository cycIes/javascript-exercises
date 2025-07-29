const palindromes = function (string) {
    let cleanedString = string;
    cleanedString = cleanedString.replaceAll("!", "");
    cleanedString = cleanedString.replaceAll(".", "");
    cleanedString = cleanedString.replaceAll(",", "");
    cleanedString = cleanedString.replaceAll(" ", "");
    cleanedString = cleanedString.toLowerCase();
    const reverse = cleanedString.split("").reverse().join("").toLowerCase();
    return cleanedString === reverse;
};

// Do not edit below this line
module.exports = palindromes;