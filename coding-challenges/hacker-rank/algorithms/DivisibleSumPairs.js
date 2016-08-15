/**
 * JavaScript Solution to HackerRank Algorithm Challenge Divisble Sum Pairs
 * https://www.hackerrank.com/challenges/divisible-sum-pairs
 *
 * michael@softwareontheshore.com
 */

const testA1 = [1, 3, 2, 6, 1, 2];
const testA2 = 3; // 5

const testB1 = [2, 5, 2, 3, 1, 6, 7, 9, 10];
const testB2 = 7; // 4

function findDivisiblePairs(k, array) {
  const length = array.length;
  let pairs = 0;

  /* cycle through all available array index pairs */
  for (let x = 0; x < length; x++) {
    for (let y = x + 1; y < length; y++) {
      const remainder = (array[x] + array[y]) % k; // see if the pair is evenly divisible
      if (remainder === 0) pairs++;
    }
  }

  return pairs;
}

console.log(findDivisiblePairs(testA2, testA1));
