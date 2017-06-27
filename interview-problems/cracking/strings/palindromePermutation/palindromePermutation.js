/** given a string input, determine if the string is a permutation of a palindrome **/
'use strict';

const testA = 'Tact coa'; // true
const testB = 'raccera'; // true
const testC = 'facecad'; // false
const testD = 'A man, a plan, a canal, Panama'; // true
const testE = 'Was it a car or a cat I saw?'; // true
const testF = 'ie'; // false

function isPalindromePermutation(str) {
    if (str == null || typeof str !== 'string') { throw new TypeError; }
    if (str.length <= 1) { return false; }

    const count = {};
    const length = str.length;
    let singles = 0;

    for (let x = 0; x < length; x++) {
        const c = str[x].toLowerCase();
        const r = /[a-zA-Z]/;

        if (r.test(c) === true) {
            if (count[c]) { count[c]++; }
            else { count[c] = 1; }
        }
    }

    for (let y in count) {
        if (count[y] % 2 !== 0) {
            singles++;
        }
    }

    return singles <= 1;
};

console.log(isPalindromePermutation(testA));
console.log(isPalindromePermutation(testB));
console.log(isPalindromePermutation(testC));
console.log(isPalindromePermutation(testD));
console.log(isPalindromePermutation(testE));
console.log(isPalindromePermutation(testF));
