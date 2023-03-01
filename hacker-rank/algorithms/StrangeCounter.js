/**
 * JavaScript Solution to HackerRank's 'Strange Counter' Algorithm Challenge
 * https://www.hackerrank.com/challenges/strange-code
 */

const testA = 4; // 6
const testB = 9; // 1
const testC = 5; // 5

/* brute force currently passes half of the cases */
function findCounterPosition(t) {
  const value = 3;
  let time = 1;
  let counter = value;
  let iteration = 1;

  while (time < t) {
    time++;
    counter--;

    if (counter === 0) {
      iteration *= 2;
      counter = iteration * value;
    }
  }

  return counter;
}

console.log(findCounterPosition(testA));
