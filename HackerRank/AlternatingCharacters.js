/**
 * Alternating Characters (JavaScript)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/alternating-characters
 *
 * michael@softwareontheshore.com
 */
'use strict';

const testA = 'ABABABAB';
const testB = 'AAABBB';
const testC = 'BBBBB';

function checkAlternation(text) {
  let deletions = 0;

  for (let x = 0; x < text.length; x++) {
    let current = text[x];

    if (current === 'A') {
      if (text[x + 1] !== 'B' && text[x + 1]) deletions++;
    }
    if (current === 'B') {
      if (text[x + 1] !== 'A' && text[x + 1]) deletions++;
    }
  }

  return deletions;
}

const result = checkAlternation(testC);
console.log(result);
