const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || 
        end < 0 || 
        typeof start !== 'number' || 
        typeof end !== 'number' ||
        !Number.isInteger(start) ||
        !Number.isInteger(end)) {
        return 'ERROR';
    } else if (start > end) {
        for (end; end <= start; end++) {
            sum += end;
    };
    } else {
        for (start; start <= end; start++) {
            sum = sum + start;
        };
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
