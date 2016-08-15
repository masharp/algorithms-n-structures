/**
 * JavaScript Solution to HackerRank's 'CamelCase' Algorithm Challenge
 * https://www.hackerrank.com/challenges/camelcase
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */

const testA = 'saveChangesInTheEditor'; // 5

function countCamelWords(str) {
  const l = str.length;
  let count = 1; // ignore first word by counting it

  for (let x = 0; x < l; x++) {
    const c = str[x].charCodeAt();
    if (c > 64 && c < 97) count++;
  }

  return count;
}

console.log(countCamelWords(testA));
