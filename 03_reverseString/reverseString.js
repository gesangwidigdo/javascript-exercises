const reverseString = function(str) {
    let strLen = str.length;
    let i = strLen - 1;
    let reversedString = ''
    while (i >= 0) {
        reversedString += str[i]
        i--;
    };
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
