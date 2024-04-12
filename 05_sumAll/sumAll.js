const sumAll = function(start, end) {
    if (
        (start < 0 || end < 0) ||
        (!Number.isInteger(start) || !Number.isInteger(end))
    ) {
        return 'ERROR';
    }
    
    let res = 0;
    if (end >= start) {
        for (let i = start; i <= end; i++) {
            res += i;
        }
    } else if (start >= end) {
        for (let i = start; i >= end; i--) {
            res += i;
        }
    } else {
        
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
