/**
 * test if a string is all unique characters
 */

'use strict';

const testA = 'abcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidjabcndbhsusiodmsdijiwejnqdjioajsdiojoi2j4ioj124jklemjlasjdlijaosidj';
const testB = 'abc';
const testC = 'ZabcdefghijklmnopqrstuvwxyzZZZZ';
const testD = 'abcdefghijklmnopqrstuvwxyz';
const testNumber = 12;
const testNull = null;


/* algorithm thats modifies intial string by deqeueing the string and checking if present */
function isUnique(str) {
    if (!str || typeof str !== 'string') { throw new TypeError; }
    if (str.length > 128) { return false; } // number of unique ASCII characters

    while (str.length) {
        const s = str[0];
        str = str.slice(1); // create a queue and dequeue

        if (str.indexOf(s) > -1) { return false; }
    }

    return true;
}

/* function that sorts and checks next index for equality */
function isUniqueA(str) {
    if (!str || typeof str !== 'string') { throw new TypeError; }
    if (str.length > 128) { return false; } // number of unique ASCII characters

    const arr = str.split('').sort();

    for (let x = 0; x < arr.length - 1; x++) {
        const y = arr[x];
        const z = arr[x + 1]

        if (y == z) { return false; }
    }

    return true;
}
