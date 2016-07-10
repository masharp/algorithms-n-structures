/* This is a BinarySearch searching algorithm that divides in half the portion of the list that contains the item
unit narrowed to just one. Returns the index of the item or -1 if not found.

  - by Michael Sharp
  - michael@softwareontheshore.com
  - www.softwareontheshore.com
*/

'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234,
                  6663, 99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873,
                  -19, 928282, 4759302, 0, 2938, 21, 222, 98, 1293, 8483,
                  988, -9, 8888, -22, 999999, 22222 ];

function binarySearch(array, target) {
  const a = array.sort((a, b) => a - b); // sort the array using built in sorter with numerical comparison
  const t = target;

  let min = 0; // start at 0
  let max = a.length - 1; // end at length of array

  /* loop through the array, spliting it into halves each iterations */
  while (min <= max) {

    /* first check the middle index value. (bitwise OR on the result is faster than Math.floor) */
    const guess = ((min + max) / 2) | 0;

    /* if the guess index is the value, return that index */
    if (a[guess] === t) return guess;

    /* if value at guess index is less than target, we can ignore the left side of the array */
    else if (a[guess] < t) min = guess + 1;

    /* if value at guess index is great than target, we can ignore the right side of the array */
    else max = guess - 1;
  }

  /* if we reach the end of the algorithm without returning a target index, return -1 */
  return -1;
}

const search = binarySearch(numArray, 13);
console.log(search);
