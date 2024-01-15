/**
 * https://leetcode.com/problems/palindrome-number/
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // If x is negative or x is a multiple of 10, it cannot be a palindrome
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    // Convert number to string and compare it to the reversed string
    return x.toString() === x.toString().split('').reverse().join('');
};

/**
 * https://leetcode.com/problems/palindrome-number/
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeWithoutStringConversion = function(x) {
    // If x is negative or x is a multiple of 10, it cannot be a palindrome
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let reversed = 0;
    let number = x;

    // Reverse the number without converting it to a string
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10); // 1. { (0 * 10) + (121 % 10) } = 1 | 2. { (1 * 10) + (12 % 10) } = 12 | 3. { (12 * 10) + (1 % 10) } = 121
        x = Math.floor(x / 10);
    }

    return number === reversed;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
