/**
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    let stripped = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // Reverse the string and compare it to the original
    let reversed = stripped.split('').reverse().join('');
    return stripped === reversed;
};
