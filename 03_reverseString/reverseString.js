const reverseString = function(str) {
    let strLen = str.length;
    let i = strLen - 1;
    console.log(i);
    console.log(str[i]);
    let reversedString = ''
    while (i >= 0) {
        reversedString += str[i]
        i--;
    };
    return reversedString;
};

// reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
