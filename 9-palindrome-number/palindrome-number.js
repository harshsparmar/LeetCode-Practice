/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 4321 %10 and add that  to reverseNumber * 10
    let copyNum = x;
    let reverseNum = 0;
    while (copyNum > 0) {
        let lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10)

    }
    return x === reverseNum

};