/**
 * JavaScript Solution to HackerRank's Super Reduced String Algorithm Challenge
 * https://www.hackerrank.com/challenges/reduced-string
 */

const testA = 'aaabccddd'; // abd
const testB = 'baab'; // 'Empty String'
const testC = 'aa'; // 'Empty String'

function reduceString(str) {
  let s = str;

  for (let x = 0; x < s.length; x++) {
    if (s[x] === s[x + 1]) {
      if (s.length === 2) return 'Empty String';
      const l = s.substr(0, x); // left of repeated chars
      const r = s.substr(x + 2); // right of repeated chars
      s = l + r; // reconstruct string minus repeated chars
      x = -1; // reset loop
    }
  }

  return s;
}

console.log(reduceString(testC));
