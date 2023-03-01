/**
 * Love Letter Myster (JavaScript)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/the-love-letter-mystery
 */
'use strict';

const testA = 'abc';
const testB = 'abcba';
const testC = 'cba';
const testD = 'abcd';

/* copy and pasting a previous palindrome-checking function found in this repo's
   interview problems directory. This one is recursive.
*/
function findPalindrome(str) {
  const firstCharacter = str.slice(0, 1);
  const lastCharacter = str.slice(-1);
  const middleCharacters = str.slice(1, -1);
  
  if (str.length <= 1) {
    return true;
  }
  if (firstCharacter !== lastCharacter) {
    return false;
  }
  return findPalindrome(middleCharacters);
}

function loveLetter(input) {
  if (findPalindrome(input)) return 0;

  const text = input;
  const len = text.length;
  let operations = 0;

  /* splits the array in half and then compares the last element to the first element's
     ascii values - which indicate how many operations will be needed */
  for (let x = 0; x < len / 2; x++) {
    operations += Math.abs(text.charCodeAt(len - 1 - x) - text.charCodeAt(x));
  }

  return operations;
}

const result = loveLetter(testD);
console.log(result);
