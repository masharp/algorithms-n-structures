/**
 * given a string and the true length of the str, replace valid spaces with %20
 */

const testA = ['test A and stuff', 16];
const testB = ['Mr John Smith     ', 13];

function urlify(cases) {
    const str = cases[0];
    const length = cases[1];

    if (!str || typeof str !== 'string') { throw new TypeError; }
    if (length <= 1) { return str; }

    return str.trim().replace(/ /g, '%20'); //replaces all instances of space using a regex;
}

console.log(urlify(testA));
console.log(urlify(testB));
