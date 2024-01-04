/**
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let characters = s.split('');

    for (character of characters) {
        switch (character) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (stack.length === 0 || stack.pop() !== character) {
                    return false;
                }
        }
    };

    return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
