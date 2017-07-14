/**
 * A non-empty zero-indexed array A consisting of N integers is given.
 * A permutation is a sequence containing each element from 1 to N once, and only once.
 *
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 */

 const testA = [4, 1, 3, 2]; // 1
 const testB = [4, 1, 3]; // 0
 const testC = [5, 5, 1, 2, 3, 4]; // 0

function solution(A) {
    const N = A.length;
    A = A.sort((a, b) => a - b);

    for (let x = 0; x < N; x++) {
        if (A[x] != x + 1) { return 0; }
    }

    return 1;
};

console.log(solution(testA));
console.log(solution(testB));
console.log(solution(testC));
