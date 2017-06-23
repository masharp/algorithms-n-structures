/**
 * write a function that checks if the first of two strings is a permutation of the other
 */

const testA = ['testA', 'Atest'];
const testB = ['abcabcabcabcabcabc', 'abcabcabcabcabcabc'];
const testC = ['ososossz', 'ososossh'];

/* sorts the two arrays to determinine equality. if so, regardless of order, a permutates b */
function checkPermutation(cases) {
    let strA = cases[0];
    let strB = cases[1];

    if (!strA || !strB || typeof strA !== 'string' || typeof strB !== 'string') { throw new TypeError; }
    if (strA.length !== strB.length) { return false; }

    /* sort the two strings */
    strA = strA.split('').sort().join('');
    strB = strB.split('').sort().join('');

    if (strA !== strB) { return false; }
    return true;
}

/* function that adds the character value of the words and compares for equality (if ASCII characters) */
function checkPermutationA(cases) {
    const strA = cases[0];
    const strB = cases[1];
    let sumA = 0;
    let sumB = 0;


    if (!strA || !strB || typeof strA !== 'string' || typeof strB !== 'string') { throw new TypeError; }
    if (strA.length !== strB.length) { return false; }


    for (let x = 0; x < strA.length; x++) {
        sumA += strA[x].charCodeAt();
        sumB += strB[x].charCodeAt();
    }

    if (sumA !== sumB) { return false; }
    return true;
}

console.log(checkPermutationA(testA));
console.log(checkPermutationA(testB));
console.log(checkPermutationA(testC));
