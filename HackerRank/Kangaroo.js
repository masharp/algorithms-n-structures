/**
 * JavaScript Solution to the Kangaroo HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/kangaroo
 *
 * michael@softwareontheshore.com
 */

const testA = { a: "0 5", b: "2 3" };
const testB = { a: "0 4", b: "3 2" };
const testC = { a: "1 3", b: "4 2" }; // 4, 6 - 7, 8 - 10, 10
const testD = { a: "3 3", b: "4 2" };

function checkKangaroos(a, b) {
  const x0 = Number(a.split(' ')[0]);
  const x1 = Number(a.split(' ')[1]);
  const v0 = Number(b.split(' ')[0]);
  const v1 = Number(b.split(' ')[1]);

  const d0 = x0 - x1;
  const d1 = v1 - v0;
  const calculate = d0 % d1;

  /* test to ensure signs align and then if there is no remainder, they will meet */
  if (v1 < v0 && calculate === 0) return "YES";
  return 'NO';
}

console.log(checkKangaroos(testB.a, testB.b));
