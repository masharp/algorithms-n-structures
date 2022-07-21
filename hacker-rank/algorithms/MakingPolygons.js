/**
 * JavaScript Solution to HackerRank's Making Polygons Algorithm Challenge
 *
 * - Given n sticks of positive integer length, create a polygon using al n sticks.
 * - A stick can be cut into two smaller sticks. Print the minimum number of cuts
 * - necessary to create a non-degenerate polygon (closed shape of 3+ sides with no overlap)
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */

'use strict';

const testA = '3 | 3 4 5'; // 0
const testB = '3 | 1 2 3'; // 1

function makePolygon(test) {
  const length = Number(test.split('|')[0].trim());
  const sticks = test.split('|')[1].trim().split(' ').map(Number).sort((a, b) => a - b);
  const longest = sticks[length - 1];
  const remainingSum = sticks.slice(0, length - 1).reduce((a, b) => a + b);

  // single stick - cut once
  if (length === 1) return 1;
  // two sticks of equal length - cut each once to make a square
  else if (length === 2 && sticks[0] === sticks[1]) return 2;
  // 1 cut if largest stick >= sum of rest of sticks (length of an edge must be smaller than the sum remaining edges)
  else if (longest >= remainingSum) {
    return 1;
  }

  return 0;
}

console.log(makePolygon(testB));
