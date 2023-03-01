/**
 * Next Permutation is the immediate lexicographically larger permutation of a sequence.
 * This is done by first identifying the longest suffix that is non-increasing.
 * Find the smallest element in the suffix greater than the pivot and then swap with
 * the pivot. Then you reverse the suffix and you have the next highest.
 *
 * Credit: https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
 */

const testA = [0, 1, 2, 5, 3, 3, 0];

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

let permutation = nextPermutation(testA);

while (permutation) {
  console.log(permutation);
  permutation = nextPermutation(permutation);
}
