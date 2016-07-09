/* This is a Bubble Sort sorting algorithm that compares each element in pairs of adjacent elements.
  The below array of 20 unsorted elements are sorted in -90- iterations.
  - by Michael Sharp
  - michael@softwareontheshore.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22];
var arrayLength = numArray.length;
var iterations = 0;

bubbleSort(numArray, arrayLength);


for (var i = 0; i < arrayLength; i++) {
  console.log(numArray[i]);
}
console.log(iterations + " " + arrayLength);

//-----------------------------------------
function bubbleSort(array, length) {
  var temp;
  for (var i = 0; i < length - 1; i++) {
    for (var j = 1; j < length; j++) {
      if (array[j] < array[j-1]) { //compare each pair in the array and moves the largest farther to the right
        temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        iterations++;
      }
    }
  }
}
