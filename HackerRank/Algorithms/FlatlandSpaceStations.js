'use strict';

const testA = [[5, 2], [0, 4]]
const testB = [[6, 6], [0, 1, 2, 4, 3, 5]]

function shortestSpacePath(array) {
  const cities = array[0][0];
  const stations = array[0][1];
  const stationPlacement = array[1];

  // check for stations to cities rations and short circuit if equal
  if (cities === stations) return 0;
  else {
    let map = Array(cities).fill(0);
    let distances = [];
    let start = 0;

    for (let x = 0; x < cities; x++) {
      const station = stationPlacement[0];
      if (x === station) {
        map[x] = 1;
        stationPlacement.shift();
      }
    }

    for (let y = 0; y < cities; y++) {
      if (map[y]) start = y;
      else distances =
    }
    console.log(map);
  }
}

console.log(shortestSpacePath(testA));
