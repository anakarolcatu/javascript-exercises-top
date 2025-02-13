const leapYears = function(year) {
    const yearDivisibleBy4 = year % 4 === 0;
    const yearDivisibleBy100 = year % 100 === 0;
    const yearDivisibleBy400 = year % 400 === 0;

    if ((yearDivisibleBy4 && !yearDivisibleBy100) || yearDivisibleBy400) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
