/**
 * Solution to HackerRank's Compare the Triplets Algorithm Challenge (Easy)
 * https://www.hackerrank.com/challenges/compare-the-triplets
 */

const testA = [[5, 6, 7], [3, 6, 10]] // 1 1
const testB = [[2, 3, 5], [2, 10, 12]] // 0 2

function compareTriplets(a, b) {
  const result = [0, 0];

  for (let x = 0; x < 3; x++) {
    if (a[x] === b[x]) continue;
    else if (a[x] > b[x]) result[0]++;
    else result[1]++;
  }

  return result.join(' ');
}

console.log(compareTriplets(testB[0], testB[1]));
