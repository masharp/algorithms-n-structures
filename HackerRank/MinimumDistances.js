/**
 * JavaScript Solution to MinimumDistance HackerRank Algorithm Challenge
 * http://
 *
 * michael@softwareontheshore.com
 */
 /*
6
7 1 3 4 1 7

Sample Output

3

Explanation
Here, we have two options:
A1 and A4 are both 1, so D14 = |1 - 4| = 3
A0 and A5 are both 7, so D05 = |0 - 5| = 5
answer is min(3, 5) = 3
*/
'use strict';

const testA = [7, 1, 3, 4, 1, 7];
const testB = [7, 7, 6, 0, 0, 0, 0, 8, 9, 6];

function findMinDistance(array) {
  const length = array.length;
  let min = null;

  for (let x = 0; x < length; x++) {
    for (let y = x + 1; y < length; y++) {
      if (array[x] === array[y]) {
        const distance = Math.abs(x - y);

        if (min === null || distance < min) min = distance;
      }
    }
  }
  
  return min;
}

console.log(findMinDistance(testB));
