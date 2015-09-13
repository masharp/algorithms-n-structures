/* This is a Merge Sort sorting algorithm that divides itself in half and calls itself until sorted and then merges
the two halves. The below array of 20 unsorted elements are sorted in -90- iterations.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22];
var arrayLength = numArray.length;
var front = 0;
var end = arrayLength - 1;
var iterations = 0;

mergeSort(numArray, front, end);


for (var i = 0; i < arrayLength; i++) {
  console.log(numArray[i]);
}
console.log(iterations + " " + arrayLength);

//-----------------------------------------
function mergeSort(array, front, end) {
  var pivot;
  
  if (end > front) {
    pivot = Math.floor((front + right) / 2);
    mergeSort(array, left, pivot);
    mergeSort(array, pivot+1, end);
    merge(array, end, pivot+1, end);
  }
}

function merge(array, front, pivot, end) {

}
