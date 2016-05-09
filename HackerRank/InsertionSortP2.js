/**
 * Insertion Sort Part 2
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/insertionsort2
 *
 * michael@softwareontheshore.com
 */
'use strict';

const test = [1, 4, 3, 5, 6, 2];

function insertionSort(array) {
  const length = array.length;

  // start at index 1, as the problem states the 0 index is sorted
  for (let x = 1; x < length; x++) {
    let value = array[x]; // value to be sorted

    // insert it into the array at the proper position, starting from the current index
    for (let y = x; y > 0; y--) {
      if (array[y] < array[y - 1]) {
        array[y] = array[y - 1]
        array[y - 1] = value;
      }
    }

    console.log(array);
  }
}

insertionSort(test);
