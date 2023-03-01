/* This is a Selection Sort sorting algorithm that compares each element in the
  array to the rest of the array in search of a smaller element. If found - swaps
  positions in order to sort array
*/
'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

function selectionSort(array) {
  const a = array;
  const len = a.length;

  /* cycle through length of array to check each item */
  for (let i = 0; i < len; i++) {
    let min = i;

    /* select one and then compare to rest of the unsorted array */
    for (let j = i + 1; j < len; j++) {
      if (a[j] < a[min]) min = j; // assign min to lesser value if found
    }

    /* if a lesser value has been found, swap positions */
    if (min !== i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }

  return a; // return sorted array
}

const sorting = selectionSort(numArray);
console.log(sorting);
