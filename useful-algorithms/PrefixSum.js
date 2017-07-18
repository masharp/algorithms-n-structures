/**
 * function that finds the prefix sum of an array. this allows fast calculation
 * of sums of elements in a given slice
 */

const testA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function prefixSums(A) {
    const N = A.length;
    const P = new Array(N).fill(0);

    for (let x = 1; x < N + 1; x++) {
        P[x] = P[x - 1] + A[x - 1];
    }

    return P;
}

function countTotal(P, x, y) {
    return P[y + 1] - P[x];
}
