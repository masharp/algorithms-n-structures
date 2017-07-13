/**
 * that, given a non-empty zero-indexed array A of N integers,
 * returns the minimal positive integer (greater than 0) that does not occur in A.
 *
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

const testA = [1, 3, 6, 4, 1, 2]; // 5
const testB = [0, 0, 5, 6, 7, 9, 12, 122]; // 1
const testC = [-12, -155, -155, 0, 0, 1, 2, 2, 3, 4, 5, 6, 7, 9, 12, 999, 1212]; // 8

function solution(A) {
    const N = A.length;
    const S = A.sort((a, b) => a - b);
    const checked = {};
    let num = 1;

    for (let x = 0; x < N; x++) {
        if (checked[S[x]]) continue; // ignore duplicate integers in sorted array

        if (S[x] > 0 && S[x] != num) {
            return num;

        } else if (S[x] > 0 && S[x] == num) {
            num++;
        }

        checked[S[x]] = true;
    }

    return num;
}

console.log(solution(testA));
console.log(solution(testB));
console.log(solution(testC));
