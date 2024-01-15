/**
 * https://leetcode.com/problems/longest-common-prefix/
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';

    // If the array is empty, return an empty string
    if (strs.length === 0) {
        return prefix;
    }

    // Loop through the characters of the first string
    for (let i = 0; i < strs[0].length; i++) {

        // Loop through the strings in the array
        for (let j = 0; j < strs.length; j++) {
            
            // If the current character does not match the character at the same index in the first string, return the prefix
            if (strs[j][i] !== strs[0][i]) {
                return prefix;
            }
        }

        // Add the current character to the prefix
        prefix += strs[0][i];
    }
  
    return prefix;
};

console.log(longestCommonPrefix(['flower','flow','flight'])); // 'fl'
console.log(longestCommonPrefix(['dog','racecar','car'])); // ''
console.log(longestCommonPrefix(['a'])); // 'a'
