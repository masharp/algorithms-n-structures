/* This is a Bubble Sort sorting algorithm that compares each element in pairs
   of adjacent elements.

  - by Michael Sharp
  - michael@softwareontheshore.com
  - www.softwareontheshore.com
*/

'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

function bubbleSort(array) {
  const a = array;
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {

    for (let j = 1; j < length; j++) {
      let temp = null;

      /* compare each pair in the array and swaps places to the right if larger */
      if (a[j] < a[j - 1]) {
        temp = a[j];
        a[j] = a[j - 1];
        a[j - 1 ] = temp;
      }
    }
  }

  return a;
}

console.log(bubbleSort(numArray));
