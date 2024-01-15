/**
 * https://leetcode.com/problems/roman-to-integer/description/
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map roman numerals to integers
    let map = {
        'I': 1, // 1
        'V': 5, // 5
        'X': 10, // 10
        'L': 50, // 50
        'C': 100, // 100
        'D': 500, // 500
        'M': 1000 // 1000
    };

    let result = 0;
    let characters = s.split('');

    for (let i = 0; i < characters.length; i++) {
        // If the current character is less than the next character, subtract the current character from the next character
        // Ex. IV = -1 + 5 = 4
        if (map[characters[i]] < map[characters[i + 1]]) {
            result -= map[characters[i]];
        } else {
            result += map[characters[i]];
        }
    }

    return result;
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
