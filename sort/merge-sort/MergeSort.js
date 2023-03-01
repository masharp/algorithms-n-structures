/* This is a Merge Sort sorting algorithm that divides itself in half and calls itself
  until sorted and then merges the two halves into a single sorted array. Sorts in
  ascending order.

  Inspired by:
    - Stoiman
    - http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
*/

'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

/**
  merge function that takes the left and right and sorts it into a single array.
  uses array.shift() to whittle away at each array until empty (merged)
*/
function merge(left, right) {
  const result = [];

  /* merge the two arrays by sorting and whittling */
  while (left.length && right.length) {
    if (left[0] <= right[0]) { result.push(left.shift()); }
    else { result.push(right.shift()); }
  }

  /* handle whatever is left in the arrays */
  while (left.length) { result.push(left.shift()); }
  while (right.length) { result.push(right.shift()); }

  return result;
}

/* Main function that handles division and is recursively called */
function mergeSort(array) {
  const length = array.length;
  if (length < 2) return array; // if array has less than 2 elements, is sorted

  const pivot = length / 2 | 0; // bitwise comparison as a quick math.floor
  const left = array.slice(0, pivot);
  const right = array.slice(pivot, length);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(numArray));
