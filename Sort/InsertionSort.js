/* This is an implementation of Insertion Sort. Takes each value and compares it
  to subsequent values. If a greater value is found, shifts to the right and inserts
  unsorted element there.

    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com
    ------------------------------------

    Psudocode:
      - Add the new value to a sorted or empty Array
      - For each element in the array
        if element > newValue
          element + 1 = element
        if element < newValue
          element + 1 = newValue
        if at the beginning of array
          element + 1 = element
          element = newValue
*/
'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

function insertionSort(array) {
  const a = array;
  const len = a.length;

  /* cycle through each item in unsorted array */
  for (let i = 0; i < len; i++) {
    const current = a[i];

    /* check the rest of the unsorted array for a larger number. if found - shift
     NOTE: must use var declaration here to insert j into function namespace */
    for (var j = i - 1; j >= 0 && a[j] > current; j--) {
      a[j + 1] = a[j];
    }

    /* insert copied value into correct position */
    a[j + 1] = current;
  }

  return a;
}

const sorted = insertionSort(numArray);
console.log(sorted);
