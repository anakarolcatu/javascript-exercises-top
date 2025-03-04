const palindromes = function (word) {
    //first transform in array, use split
    console.log(word);
    let cleanWord = word
        .toLowerCase()
        .replace(/[\s\p{P}]/gu, "");

    let reverse = cleanWord
        .split('')
        .reverse()
        .join('');
    console.log(reverse);

    //then compare both
    return cleanWord === reverse;
};
console.log(palindromes('Rac ecar!'));
// Do not edit below this line
module.exports = palindromes;
