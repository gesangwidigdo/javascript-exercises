const removeFromArray = function(array, ...removedItem) {
    return array.filter((item) => !removedItem.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
