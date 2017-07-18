/**
 *
 */

const testA = [5, [3, 4, 4, 6, 1, 4, 4]]; // [3, 2, 2, 4, 2]

function solution(cases) {
    const N = cases[0];
    const A = cases[1];
    let counter = new Array(N).fill(0);
    let max = 0;

    for (let x = 0; x < A.length; x++) {
        const z = A[x];

        if (z <= N && z > 0) {
            counter[z - 1] = counter[z - 1] + 1;

            if (counter[z - 1] > max) max = counter[z - 1];

        } else if (z === N + 1) {
            counter = counter.fill(max);
        }
     }

    return counter;
}

console.log(solution(testA));
