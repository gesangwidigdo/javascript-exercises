const repeatString = function(str, num) {
    let result = '';
    if (num == 0) {
        result = '';
    } else if (num < 0) {
        result = 'ERROR';
    } else {
        while(num--) {
            result += str
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
