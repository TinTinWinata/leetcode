/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (BigInt(digits.reduce(function(total, value){return total + value;},"")) + 1n).toString().split('')
};
