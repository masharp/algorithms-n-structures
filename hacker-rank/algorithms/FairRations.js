/**
 * JavaScript Solution to HackerRank's Fair Rations Algorithm Challenge
 * https://www.hackerrank.com/challenges/fair-rations
 */

'use strict';

const testA = [1, 2]; // NO
const testB = [2, 3, 4, 5, 6]; // 4

function distributeBread(array) {
  const a = array;
  const l = array.length;
  let sum = 0;

  /* sum the array to see if a valid collection */
  sum = a.reduce((a, b) => a + b);

  /* if the total number of bread to begin with is odd, we cannot end up with even */
  if (sum % 2 !== 0) {
    return 'NO';
  /* distribute bread to uneven values and the array next in line */
  } else {
    let breads = 0;

    for (let y = 0; y < l; y++) {
      if (a[y] % 2 !== 0) {
        a[y] += 1;
        a[y + 1] += 1;
        breads += 2
      }
    }

    return breads;
  }
}

console.log(distributeBread(testA));
