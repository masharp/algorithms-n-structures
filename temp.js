'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

function insertionSort(array) {
  const a = array;
  const len = a.length;

  for (let x = 0; x < len; x++) {
    const current = a[x];

    for (var y = x - 1; x >= 0 && a[y] > current; y--) {
      a[y + 1] = a[y];
    }

    a[y + 1] = current;
  }

  return a;
}

console.log(insertionSort(numArray));
