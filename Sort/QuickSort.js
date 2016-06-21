/* This is a Quicksort sorting algorithm that takes the rightmost element as the pivot and puts
 all smaller elements to the front of the pivot. This is repeated until sorted. Uses a Functional
 ES6 implementation

  - by Michael Sharp
  - michael@softwareontheshore.com
  - www.softwareontheshore.com

*/

'use strict';

const numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

/* ES6 Functional QuickSort - given to the array prototype */
Array.prototype.quickSortES6 = function quickSortES6() {
  if (this.length < 2) return this; // if length 1, array is sorted

  /* compute pivot as center of the array using bitwise operation */
  const pivot = this[(this.length / 2) | 0];

  return this.filter((x) => x < pivot).quickSortES6() // less than pivot (left)
         .concat(this.filter((x) => x == pivot)) // pivot
         .concat(this.filter((x) => x > pivot).quickSortES6()) // greater than pivot (right)
}

const sorted6 = numArray.quickSortES6();
console.log(sorted6);
