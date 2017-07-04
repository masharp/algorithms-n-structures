/** function that determines if two strings are one edit away from being the same
 * three edits: remove, replace, add
 **/

const testA = ['pale', 'ple']; // true
const testB = ['pales', 'pale']; // true
const testC = ['pale', 'bake']; // false
const testD = ['rake', 'rake']; // true
const testE = ['ad', 'grad']; // false

function isOneEditAway(cases) {
    if (cases == null || cases[0] == null || cases[1] == null || typeof cases[0] !== 'string' || typeof cases[1] !== 'string') {
        throw new TypeError;
    }

    const strA = cases[0];
    const strB = cases[1];
    const lenA = strA.length;
    const lenB = strB.length;
    const diff = Math.abs(lenA - lenB);
    let replace = 0;

    /* strings are already the same */
    if (strA === strB) return true;

    /* strings have the same length , so no add or delete */
    else if (diff === 0) {

        /* check if we can replace in one edit */
        for (let x = 0; x < lenA; x++) {
            const y = strA[x];
            const z = strB[x];

            if (y !== z) replace++;
            if (replace > 1) break;
        }

        if (replace == 1) return true;

    /* one string is longer than the other, check if strings are the same except one remove or add */
    } else if (diff === 1) {

        /* add/remove a character from string A */
        if (lenA > lenB) {
            for (let x = 0; x < lenB.length; x++) {
                const y = strA[x];
                const z = strB[x];

                if (y !== z) replace++;
                if (replace > 0) break;
            }

            if (replace == 0) return true;

        /* add/remove a chracter from string B */
        } else if (lenB > lenA) {
            for (let x = 0; x < lenA.length; x++) {
                const y = strA[x];
                const z = strB[x];

                if (y !== z) replace++;
                if (replace > 0) break;
            }

            if (replace == 0) return true;
        }
    }

    return false;
}

console.log(isOneEditAway(testA));
console.log(isOneEditAway(testB));
console.log(isOneEditAway(testC));
console.log(isOneEditAway(testD));
console.log(isOneEditAway(testE));
