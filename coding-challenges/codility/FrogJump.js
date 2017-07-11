/**
 * caclulate minimum number of jumps of length C from start (A) and destination (B)
 *
 * expected worst-case time complexity is O(1);
 * expected worst-case space complexity is O(1).
*/

const testA = [10, 85, 30]; // 3
const testB = [1, 5, 1]; // 4
const testC = [0, 1000, 15] // 67

function findJumps(A, B, C) {
    const start = A;
    const end = B;
    const jump = C;

    return Math.ceil((end - start) / jump);
}

console.log(findJumps(testA[0], testA[1], testA[2]));
console.log(findJumps(testB[0], testB[1], testB[2]));
console.log(findJumps(testC[0], testC[1], testC[2]));
