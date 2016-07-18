/**
 * A brute force JavaScript algorithm that uses two for-loops to find all
 * sub-arrays of an array, in the current place. (NOT permutations)
 *
 * michael@softwareontheshore.com
 */

'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234,
                  6663, 99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873,
                  -19, 928282, 4759302, 0, 2938, 21, 222, 98, 1293, 8483,
                  988, -9, 8888, -22, 999999, 22222 ];


function subArray(array) {
  const a = array;
  const l = array.length;

  for (let x = 1; x < l + 1; x++) {
    for (let y = 0; y < (l - x) + 1; y++) {
      console.log(a.slice(y, x + y));
    }
  }
}

subArray(numArray);
