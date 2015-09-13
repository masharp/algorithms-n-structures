/* This is a Selection Sort sorting algorithm that compares each element in the array to the rest of the array in search
of a smaller element. If found, the algorithm swaps the smaller element's position with the larger element's position.
The below array of 20 unsorted elements are sorted in -17- iterations.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22];
var arrayLength = numArray.length;
var iterations = 0;

selectionSort(numArray, arrayLength);


for (var i = 0; i < arrayLength; i++) {
  console.log(numArray[i]);
}
console.log(iterations + " " + arrayLength);

//-----------------------------------------
function selectionSort(array, length) {
  var min, mindex, temp;

  for (var i = 0; i < length; i++) {
    min = array[i]; //set minimum to first element
    mindex = i; //get the index of that element

    for (var j = i + 1; j < length; j++) { //compare the current element to the array
        if (array[j] < min) { //if a new element is smaller, capture it
          min = array[j];
          mindex = j;
        }
    }

    if (min < array[i]) { // if new element is smaller than current element, swap places
      temp = array[i];
      array[i] = min;
      array[mindex] = temp;
      iterations++
    }
  }
}
