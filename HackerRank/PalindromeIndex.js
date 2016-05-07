/**
 * Palindrome Index (JavaScript)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/palindrome-index
 *
 * michael@softwareontheshore.com
 *
 * NOTE: Currently passes half of test cases. Times out on large cases
 */
'use strict';

const testA = 'aaab';
const testB = 'baa';
const testC = 'aaa';
const testD = 'hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh';
const testQ = 'abcdefg';


/* imported palindrome checker from previous challenge */
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

function findPalindromeIndex(input) {
  if (findPalindrome(input)) return -1; // if already a palindrome

  for (let x = 0; x < input.length; x++) {
    let characters = input.slice().trim().split('');
    characters.splice(x, 1);
    const text = characters.join('');

    if (findPalindrome(text)) return x;
  }
}

const result = findPalindromeIndex(testD);
console.log(result);
