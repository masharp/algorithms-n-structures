/**
 * JavaScript Solution to HackerRank's 'Beautiful Binary String' Algorithm Challenge
 * https://www.hackerrank.com/challenges/beautiful-binary-string
 */

const testA = '0101010'; // 2
const testB = '01100'; // 0
const testC = '0100101010'; // 3

function countStepsUntilBeautiful(str) {
  const l = str.length;
  let count = 0;

  for (let x = 0; x < l - 2; x++) {
    const substr = str.substr(x, 3); // pull out 3 characters of the string
    if (substr === '010') { // check if 'ugly'
      count++;
      x += 2; // skip ahead to simulate 'change'
    }
  }

  return count;
}

console.log(countStepsUntilBeautiful(testC));
