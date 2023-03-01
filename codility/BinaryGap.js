/**
 * function that returns the longest sequence of 0s, closed by 1s (binary gap) in the binary
 * representation of an integer
 *
 * expected worst-case time complexity is O(log(N));
 * expected worst-case space complexity is O(1)
 * https://codility.com/programmers/lessons/1-iterations/binary_gap/
 */

'use strict';

const testA = 9; // 1001 - 2
const testB = 529; // 100010001 - 4
const testC = 20; // 10100 - 1
const testD = 1041; // 1000001001 - 5

function solution(N) {
    const B = (N >>> 0).toString('2');
    const bArray = B.split('1');
    const len = bArray.length;
    let longest = 0;

    for (let x = 0; x < len; x++) {
        const y = bArray[x];

        if (y.length > 0 && x > 0) {

            if (x + 1 < len) {

                if (bArray[x + 1].length >= 0) {

                    if (y.length > longest) {
                        longest = y.length;
                    }

                    if (y.length >= B.length) { break; }
                }
            }
        }
    }
    return longest;
}

console.log(solution(testA));
console.log(solution(testB));
console.log(solution(testC));
console.log(solution(testD));
