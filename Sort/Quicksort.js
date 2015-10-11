/* This is a Quicksort sorting algorithm that takes the rightmost element as the pivot and puts
 all smaller elements to the front of the pivot. This is repeated until sorted. The below array of 40 unsorted
elements are sorted in -141- iterations.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com */

var numArray = [12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663, 99, 46, 2, 124, 18, 22,
                144, 1235, 29772, 1912873, -19, 928282, 4759302, 0, 2938, 21, 222, 98,
                1293, 8483, 988, -9, 8888, -22, 999999, 22222];

var arrayLength = numArray.length;
var front = 0;
var end = arrayLength - 1;
var iterations = 0;

quickSort(numArray, front, end);

console.log(numArray);
console.log(iterations + " " + arrayLength);

//-----------------------------------------
function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}
function partition(array, p, r) {
  var pivot = array[r];
  var q = p;

  for(var j = p; j < r; j++) {
    if(array[j] <= pivot) {
      swap(array, j, q);
      q++;
      iterations++;
    }
  }
  swap(array, q, r);
  return q;
}
function quickSort(array, front, end) {
    var index;

    if (array.length > 1) {
      index = partition(array, front, end);
    } if (front < index - 1) {
      quickSort(array, front, index - 1);
    } if (index < end) {
      quickSort(array, index, end);
    }
    return array;
}


/* // CAN ADD A RANDOM PIVOT
function findRandomPivot(length) {
  var randomsArr = [];

  if(length >= 3) {
    for(var j = 0; j < 3; j++) {
      var random = Math.floor(Math.random() * length);
      randomsArr.push(random);
    }
    randomsArr.sort(function(a , b) {
      return a - b;
    });
    return randomsArr[1];
  } else return length;
}
} */
