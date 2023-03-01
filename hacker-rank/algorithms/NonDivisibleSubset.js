/**
 * JavaScript Solution to HackerRank's 'Non-Divisible Subset' Algorithm Challenge
 * https://www.hackerrank.com/challenges/non-divisible-subset
 * 
 * NOTE: Currently only passes two of fifteen cases.
 */

'use strict';

const testA = { array: [1, 7, 2, 4], k: 3 };

function findSubset(test) {
  const set = test.array;
  const k = test.k;
  const length = set.length;
  let subset = [];

  for (let x = 0; x < length; x++) {
    for (let y = x + 1; y < length; y++) {
      const sum = set[x] + set[y];
      if (sum % k !== 0) {
        if (subset.indexOf(set[x]) === -1) subset.push(set[x]);
        if (subset.indexOf(set[y]) === -1) subset.push(set[y]);
      }
    }
  }

  return subset.length;

}

console.log(findSubset(testA));
