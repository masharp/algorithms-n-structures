/**
 * JavaScript Solution to Flatland Space Stations HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/flatland-space-stations
 *
 * softwareontheshore.com
 */
'use strict';

const testA = [[5, 2], [0, 4]] // 2
const testB = [[6, 6], [0, 1, 2, 4, 3, 5]] // 0
const testC = [[20, 5], [13, 1, 11, 10, 6]] // 6

function shortestSpacePath(array) {
  const cities = array[0][0];
  const stations = array[0][1];
  const stationPlacement = array[1].sort((a, b) => a - b);

  // check for stations to cities rations and short circuit if equal
  if (cities === stations) return 0;
  else {
    let stationNumber = 0; // track current and next stations
    let longest = 0; // track longest distance
    let previousStation = stationPlacement[stationNumber]; // track previous

    for (let x = 0; x < cities; x++) {
      let nextStation = stationPlacement[stationNumber + 1]; // get the next station
      let distance = null;

      if (nextStation) distance = Math.min(Math.abs(nextStation - x), Math.abs(previousStation - x)); // if there are two stations surrounding city
      else distance = Math.abs(previousStation - x); // if there is only one station to the left

      if (x === previousStation || x === nextStation) distance = 0; // ignore if index is a station
      if (x === nextStation) { // change stations if we pass one
        stationNumber++;
        previousStation = nextStation;
      }

      longest = Math.max(longest, distance)// see which is longer, the tracked or the new
    }

    return longest;
  }
}

console.log(shortestSpacePath(testA));
