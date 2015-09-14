/* This is a Merge Sort sorting algorithm that divides itself in half and calls itself until sorted and then merges
the two halves. The below array of 20 unsorted elements are sorted in -67- iterations.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22];
var iterations = 0;

console.log(mergeSort(numArray));
console.log(iterations + " " + numArray.length);

//-----------------------------------------
function mergeSort(array) {

  if (array.length < 2) return array;

  var pivot = Math.floor(array.length / 2),
      leftArray = mergeSort(array.slice(0, pivot)),
      rightArray = mergeSort(array.slice(pivot, array.length));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  var resultArray = [];

  while(leftArray.length > 0 && rightArray.length > 0) {
    resultArray.push(leftArray[0] < rightArray[0] ? leftArray.shift() : rightArray.shift());
    iterations++;
  }
  return resultArray.concat(leftArray.length ? leftArray : rightArray);
}
