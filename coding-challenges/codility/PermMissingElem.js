/** A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);
that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
 */

 const testA = [2, 3, 1, 5, null]; // 4

/* add the contents of A and the appropriate contents of A, subtract. avoids sort */
function solution(A) {
    const N = A.length;
    let countA = 0;
    let countB = 0;

    if (N === 0) { return -1; }

    for (let x = 0; x < N; x++) {
        countA += A[x] != null ? A[x] : 0;
        countB += x + 1;
    }

    return countB - countA;
}

/* algorithm with a better average case due to sorting and the break */
function solutionTwo(A) {
    const N = A.length;

    if (N === 0) { return -1; }

    A = A.sort((a, b) => a > b);

    for (let x = N - 1; x > 0; x--) {
        const a = A[x];
        const b = x + 1;

        if (a !== b) {
            return b;
        }
    }

    return 0;
}

console.log(solution(testA));
console.log(solutionTwo(testA));
