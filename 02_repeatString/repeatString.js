const repeatString = function(string, num) {
    stringToRepeat = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (i = 0; i < num; i++) {
        stringToRepeat += string;
    }
    return stringToRepeat;
};

// Do not edit below this line
module.exports = repeatString;
