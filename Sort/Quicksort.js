/* This is a Quicksort sorting algorithm that takes splits the dataset in half and then takes the average (pivot)
and putting all smaller elements to the front. This is repeated until sorted. The below array of 20 unsorted
elements are sorted in -27- iterations.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22];
var arrayLength = numArray.length;
var front = 0;
var end = arrayLength - 1;
var iterations = 0;

quickSort(numArray, front, end);


for (var i = 0; i < arrayLength; i++) {
  console.log(numArray[i]);
}
console.log(iterations + " " + arrayLength);

//-----------------------------------------
function quickSort(array, front, end) {
    var index;

    if (array.length > 1) {
      index = divide(array, front, end);
    }

    if (front < index - 1) {
      quickSort(array, front, index - 1);
    }
    if (index < end) {
      quickSort(array, index, end);
    }

    return array;
}

function divide(array, front, end) {
  var pivot = array[Math.floor((front + end)/2)]; //pivot element value
  var i = front, j = end; //front and end elements
  var temp = 0;

  //divide dataset
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while(array[j] > pivot) {
      j--;
    }
    if(i <= j) {
      temp = array[i]; //swap positions
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
      iterations++;
    }
  }
  return i;
}
