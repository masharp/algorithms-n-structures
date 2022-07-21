/**
 *
 */

const testA = [0, 1, 0, 1, 1]; // 5

function solution(A) {
    let cars = 0;
    let x = 0;

    for (let y = 0; y < A.length; y++) {
        if (A[y] === 0) x++;
        else if (A[y] === 1) cars += x;
    }

    return cars <= 1000000000 ? cars : -1;
}

console.log(solution(testA));
