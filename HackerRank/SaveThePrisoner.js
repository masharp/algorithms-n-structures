/**
 * Save the Prisonsers! HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/save-the-prisoner
 *
 * michael@software on the shore
 */

'use strict';

const testA = [5, 2, 1];
const testB = [10, 10, 5];

function savePrisoner(args) {
  /* parse args */
  const prisoners = args[0]; // number of prisoners
  const sweets = args[1]; // number of sweets
  const start = args[2]; // random start to candy distribution

  /* finding the remainder of sweets + start - 1 gives us the position
     of the last candy. if the remainder is 0, the prisoner will be the last,
     so we return number of prisoners */
  const prisoner = (sweets + start) % prisoners - 1;

  return prisoner !== 0 ? prisoner : prisoners;
}

console.log(savePrisoner(testA));
