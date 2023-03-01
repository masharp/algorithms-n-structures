/**
 * Larry's Array (JavaScript)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/larrys-array
 */
'use strict';

const test = [ '3', '3', '3 1 2', '4', '1 3 4 2', '5', '1 2 3 5 4' ];

/**
 * Function that checks the number of inversions at the start of the unsorted array.
 * If they are even, then the array can be sorted based on the parity and type of
 * operation. This is because the inversions can only be changed by postive or negative 2
 *
 * @param{array} - array of unique integers
 * @return{string} result - 'YES' for can be sorted, 'NO' for cannot
 */
function checkRobot(array) {
  const list = array.slice();
  const len = list.length;
  let inversions = 0;
  let result = 'NO';

  for (let j = 0; j < len - 1; j++) {
    for (let k = j + 1; k < len; k++) {
      if (list[j] > list[k]) inversions++;
    }
  }

  if (inversions % 2 === 0) result = 'YES';
  return result
}

/**
 * Main function that takes the HackerRank test input and performs the
 * robots task on each test case
 */
function helpLarry(input) {
  const numTests = input[0];

  for (let i = 1; i < input.length; i += 2) {
    const size = input[i];
    const robotArray = input[i + 1].split(' ').map(Number);
    const result = checkRobot(robotArray);
    console.log(result);
  }
}

helpLarry(test);
