const fibonacci = function(number) {
    let position = parseInt(number);
    return position < 0 ? "OOPS"
    : position < 1 ? 0
    : position <= 2 ? 1
    : fibonacci(position - 1) + fibonacci(position - 2)
};
let result = fibonacci("4");
console.log(result);
// Do not edit below this line
module.exports = fibonacci;
