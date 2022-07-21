/**
 * JavaScript Solution to HackerRank's Algorithm Challenge Cookie Party
 *
 * - Given N guests and M cookies how many cookies must be baked for each guest
 * - to have an even number of cookies
 *
 * Michael Sharp
 * http://www.softwareontheshore.com
 */

'use strict';

const testA = '3 2'; // 1
const testB = '3 13' // 2

function cookies(test) {
  const guests = Number(test.split(' ')[0]);
  const cookies = Number(test.split(' ')[1]);

  if (guests === cookies) return 0; // no need to bake any
  else if (guests > cookies) return guests - cookies; // give each guest 1 cookie
  else {
    let current = cookies;
    let baked = 0;
    let remaining = cookies % guests;

    /* bake one cookie at a time and see if each guest then has an evenly divisible amount */
    while (remaining !== 0) {
      baked++;
      current++;
      remaining = current % guests;
    }

    return baked;
  }
}

console.log(cookies(testB));
