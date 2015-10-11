/* This is a BinarySearch searching algorithm that divides in half the portion of the list that contains the item
unit narrowed to just one. Returns the index of the item or -1 if not found.
The below list of 40 is iterated through 3 times to find the static target.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22,
                  144, 1235, 29772, 1912873, -19, 928282, 4759302, 0, 2938, 21, 222, 98,
                  1293, 8483, 988, -9, 8888, -22, 999999, 22222];
numArray = numArray.sort();
var target = 2938;
var iterations = 0;

console.log(numArray);
console.log("Target found at: " + binarySearch(numArray, target) + " and " + iterations);

function binarySearch(array, target) {
  var min = 0;
  var max = array.length - 1;
  var guess = 0;

  while(min <= max) {
    iterations++;
    guess = Math.floor((min + max) / 2);
    if(array[guess] === target) {
      return guess;
    } else if (array[guess] < target) {
      min = guess - 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}
