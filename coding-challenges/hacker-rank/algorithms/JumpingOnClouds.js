/**
 * JavaScript Solution to HackerRank Algorithm Challenge Jumping on Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds
 *
 * michael@softwareontheshore.com
 */

var testA = [0, 0, 1, 0, 0, 1, 0]; // 4
var testB = [0, 0, 0, 0, 1, 0]; // 3

function findJumps(clouds) {
  var length = clouds.length;
  var jumps = 0;

  /* initiate an array to loop through each cloud */
  for (var x = 0; x < length; x++) {
    if (clouds[x + 2] === 0) x++; // if we can make a double jump, take it
    if (x != length - 1) jumps++; // if we are not at the end, jump taken
  }

  return jumps;
}

console.log(findJumps(testB));
