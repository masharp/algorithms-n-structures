/* This is a Quicksort sorting algorithm that takes the rightmost element as the pivot and puts
 all smaller elements to the front of the pivot. This is repeated until sorted. The below array of 40 unsorted
elements are sorted in -141- iterations.
  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com

------------------------------------------
  The below code is based on the following psudocode, but modified for a for-loop:
      - QuickSort(array, front, end)
          if front < end
            then pivot = randomizedPartition(array, front end)
              QuickSort(array, front, pivot)
              QuickSort(array, pivot+1, end)

      - Partition(Array, front, end)
          x = Array[front]
          i = front - 1
          j = end + 1

          while TRUE
            do repeat (j--)
              until Array[j] <= x
            do repeat (i++)
              until Array[i] >= x
            if (i < j)
              then swap Array[i] with Array[j]
            else
              return j

        - randomizedPartition(Array,front, end)
            i = random(front, end)
            swap Array[front] with Array[i]
            return Parition(Array, front)

        - random(front, end)
          x = Math.random(between front and end)
          return x
  */

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

/*
  --------------------
  This function swaps the indices of two elements in an array passed to it.
  --------------------
*/
function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
/*
  --------------------
  This is the quiksort partitioning funtion that takes the array, front starting
  element, and ending element. The function uses the right-most element as a pivot
  and sorts all elements <pivot to the right, and >pivot to the left. It then
  returns the index of the pivot in the array.
  --------------------
*/
function partition(array, front, end) {
  var pivot = array[end];
  var index = front;

  for(var j = front; j < end; j++) {
    if(array[j] <= pivot) {
      swap(array, front, index);
      index++;
      iterations++;
    }
  }
  swap(array, index, end);
  return index;
}
/*
  --------------------
  This is the main QuickSort function that recursively sorts the array by
  partitioning the array into halfs and then sorting based on the partitioning
  function.
  --------------------
*/
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


/*
  --------------------
  This is a series of functions that adds random characteristics to the selection
  of the pivot. Includes psudocode.
  It currently has a bug that results in a randomly sorted array.
  --------------------

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
*/
