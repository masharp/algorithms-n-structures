/**
 * JavaScript Solution to HackerRank's Circular Array Rotation Algorithm Challenge
 * https://www.hackerrank.com/challenges/circular-array-rotation
 *
 * michael@softwareontheshore.com
 */

const testA = [3, 2, 1];
const testAA = [1, 2, 3];
const testAAA = [0, 1, 2];

/* brute force method - rotate the array k times and the query the array for the
 * element at test[y] position. Inefficient for large numbers of k.
 */
function testSherlockA(k, array, tests) {
  const q = tests.length;

  for (let x = 0; x < k; x++) {
    const t = array.pop();
    array.unshift(t);
  }

  for (let y = 0; y < q; y++) {
    console.log(array[tests[y]]);
  }
}

/* mathmatic method - calcualte the modulo of k and array length and then
 * output the element at index (target - rotation), if non-negative or
 * element at index (target - rotation) + length of array
 */

function testSherlock(k, array, tests) {
  const rotation = k % array.length;
  const q = tests.length;

  for (let x = 0; x < q; x++) {
    const current = test[x];
    if (current - rotation >=0) console.log(array[current - rotation]);
    else console.log(array[current - rotation + array.length]);
  }
}

//testSherlock(2, testAA, testAAA);
testSherlockA(2, testAA, testAAA);
