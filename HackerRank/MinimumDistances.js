/**
 * JavaScript Solution to MinimumDistance HackerRank Algorithm Challenge
 * http://
 *
 * michael@softwareontheshore.com
 */

'use strict';

const testA = [7, 1, 3, 4, 1, 7];
const testB = [7, 7, 6, 0, 0, 0, 0, 8, 9, 6];

function findMinDistance(array) {
  const length = array.length;
  let min = -1;

  for (let x = 0; x < length; x++) {
    for (let y = x + 1; y < length; y++) {
      if (array[x] === array[y]) {
        const distance = Math.abs(x - y);

        if (min < 0 || distance < min) min = distance;
      }
    }
  }

  return min;
}

console.log(findMinDistance(testB));
