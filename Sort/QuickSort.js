/* This is a Quicksort sorting algorithm that takes the rightmost element as the pivot and puts
 all smaller elements to the front of the pivot. This is repeated until sorted. Uses the middle
 element of the array.

  - by Michael Sharp
  - michael@softwareontheshore.com
  - www.softwareontheshore.com

------------------------------------------
    Psudocode:
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
  'use strict';

  const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                    99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                    4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                    999999, 22222 ];

/**
 * Simple swap function.
 */
 function swap(array, i, j) {
   const temp = array[i];
   array[i] = array[j];
   array[j] = temp;

   return array;
 }

/**
 * This function computes a pivot (in this case the middle element) and puts
 * everything lower than the pivot to the left and higher to the right.
 */
function partition(array, left, right) {

}

/**
 *  This function recursively sorts the array by computing the index of the pivot
 *  and then dividing the array into two subarrays.
 *  @param {array}: array to be sorted
 *  @param {left}: left-most element in the array
 *  @param {right}: right-most element in the array
 */
function quickSort(array, left, right) {

}

const sorted = quickSort(numArray);
console.log(sorted);
