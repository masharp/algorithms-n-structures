/** function that determines if two strings are one edit away from being the same **/

const testA = ['pale', 'ple'];
const testB = ['pales', 'pale'];
const testC = ['pale', 'bake'];

function isOneEditAway(cases) {
    if (cases == null || cases[0] == null || cases[1] == null || typeof cases[0] !== 'string' || typeof cases[1] !== 'string') {
        throw new TypeError;
    }

    const strA = cases[0];
    const strB = cases[1];

    
}

console.log(isOneEditAway(testA));
console.log(isOneEditAway(testB));
console.log(isOneEditAway(testC));
