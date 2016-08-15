/**
 * JavaScript Solution to Bigger Is Greater HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/bigger-is-greater
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */
const testA = 'ab'; // ba
const testB = 'bb'; // no answer
const testC = 'hefg'; // hegf
const testD = 'dhck'; // dhkc
const testE = 'dkhc'; // hcdk

/* imported function for calculating next permutation */
function nextPermutation(array) {
  let pivot = array.length - 1; // start at the end
  let swap = array.length - 1;
  let reversed = array.length - 1;
  let temp = 0;

  /* find the largest non-increasing subset */
  while (pivot > 0 && array[pivot - 1] >= array[pivot]) { pivot--; }
  if (pivot <= 0) return null; // if non-decreasing, we already have the last permutation

  /* find the element in the subset to swap with pivot */
  while (array[swap] <= array[pivot - 1]) { swap--; }

  /* swap */
  temp = array[pivot - 1];
  array[pivot - 1] = array[swap];
  array[swap] = temp;

  /* reverse the non-increasing subset */
  while (pivot < reversed) {
    temp = array[pivot];
    array[pivot] = array[reversed];
    array[reversed] = temp;
    pivot++;
    reversed--;
  }

  return array;
}

function findBigger(string) {
  const arr = string.split('').map((x) => x.charCodeAt()); // spit array in char codes
  const nextPerm = nextPermutation(arr); // find the next permutation
  if (!nextPerm) return 'no answer';

  const permutation = nextPerm.map((x) => String.fromCharCode(x)).join(''); // convert permuation into characters and join to string

  return permutation;
}

console.log(findBigger(testE));
