/*
  This is a Linear Search searching algorithm that searches each element of an
  array linearly to find the target item
*/

'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234,
                  6663, 99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873,
                  -19, 928282, 4759302, 0, 2938, 21, 222, 98, 1293, 8483,
                  988, -9, 8888, -22, 999999, 22222 ];

function linearSearch(array, target) {
  const a = array;
  const t = target;
  const l = array.length;

  for (let i = 0; i < l; i++) {
    const element = a[i];

    if (element === t) return i;
  }

  return -1;
}

console.log(linearSearch(numArray, 13));
