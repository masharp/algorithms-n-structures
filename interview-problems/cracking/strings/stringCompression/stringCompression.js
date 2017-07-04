/** function that compresses a string using the counts of repeated characters
 **/

const testA = 'aabcccccaaa'; // a2b1c5a3
const testB = 'abc'; // abc
const testC = 'aaaaabbbbbbcdeeff'; // a5b5c1d1e2f2
const testD = 'aaaaaAAAAAA'; // a5A5

function stringCompression(test) {
    if (test == null || typeof test !== 'string') {
        throw new TypeError;
    }

    const len = test.length;
    const compressions = [];
    let watching = '';
    let watchedCount = 0;

    for (let x = 0; x < len; x++) {
        const c = test[x];

        if (watching.length == 0) {
            watching = c;
            watchedCount++;

        } else if (watching === c) {
            watchedCount++;

            if (x + 1 < len) {
                if (test[x + 1] !== c) {
                    compressions.push(watching + watchedCount);
                }
            } else if (x + 1 >= len) {
                compressions.push(watching + watchedCount);
            }
        } else if (watching !== c) {
            watching = c;
            watchedCount = 1;

            if (x + 1 < len) {
                if (test[x + 1] !== c) {
                    compressions.push(watching + watchedCount);
                }
            } else if (x + 1 >= len) {
                compressions.push(watching + watchedCount);
            }
        }

    }

    return compressions.join('');
}

console.log(stringCompression(testA));
console.log(stringCompression(testB));
console.log(stringCompression(testC));
console.log(stringCompression(testD));
