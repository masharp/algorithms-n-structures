/**
 * A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
 * Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
 * The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
 * In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
 */

const testA = [3, 1, 2, 4, 3]; // 1
const testB = [5, 10, -12, 15, 9, 1, 102] // 74
const testC = [0, 1]; // 1

function solution(A) {
    const N = A.length;
    let min = -1;

    for (let p = 1; p < N; p++) {
        const left = A.slice(0, p).reduce((a, b) => a + b);
        const right = A.slice(p, N).reduce((a, b) => a + b);
        const diff = Math.abs(left - right);

        if (diff < min || min == -1) {
            min = diff;
        }
    }

    return min;
}

console.log(solution(testA));
console.log(solution(testB));
console.log(solution(testC));
