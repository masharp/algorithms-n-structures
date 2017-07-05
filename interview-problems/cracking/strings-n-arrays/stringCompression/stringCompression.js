/** function that compresses a string using the counts of repeated characters
 **/

const testA = 'aabcccccaaa'; // a2b1c5a3
const testB = 'abc'; // abc
const testC = 'aaaaabbbbbcdeeff'; // a5b5c1d1e2f2
const testD = 'aaaaaAAAAAA'; // a5A6

function stringCompression(test) {
    if (test == null || typeof test !== 'string') {
        throw new TypeError;
    }

    const len = test.length;
    const compressions = [];
    let result = [];
    let watching = '';
    let watchedCount = 0;

    for (let x = 0; x < len; x++) {
        const c = test[x];

        if (watching === c) {
            watchedCount++;

        } else if (watching !== c) {
            watching = c;
            watchedCount = 1;
        }

        /* if the next character is not the current or the current index is the
         * last, create a compressed section of the string */
        if ((x + 1 < len && test[x + 1] !== c) || x + 1 >= len) {
            compressions.push(watching + watchedCount);
        }
    }

    result = compressions.join('');

    /* if the compressed string is longer or the same as the passed string, return passed */
    if (result.length >= len) return test;
    else return result;
}

console.log(stringCompression(testA));
console.log(stringCompression(testB));
console.log(stringCompression(testC));
console.log(stringCompression(testD));
