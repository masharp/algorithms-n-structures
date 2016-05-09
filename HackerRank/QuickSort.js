/**
 * QuickSort (JavaScript)
 * HackerRank Sorting Algorithm Challenge
 * https://www.hackerrank.com/challenges/quicksort1
 * https://www.hackerrank.com/challenges/quicksort2
 *
 * michael@softwareontheshore.com
 */
const test = [4, 5, 3, 7, 2];

function divide(array, pivot) {
  if (array.length === 1) return array;

  const p = array[pivot];
  const equal = [];
  const left = [];
  const right = [];

  for (x of array) {
    if (x < p) left.push(x);
    if (x > p) right.push(x);
    if (x === p) equal.push(x);
  }

  return divide(left, 0)
}

function quickSort(array, left, right) {
  const pivot = 0;
  const divided = divide(array, pivot);
  console.log(divided);

}

const result = quickSort(test);
console.log(result);
