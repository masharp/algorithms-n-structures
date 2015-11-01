/* This is a Quicksort sorting algorithm that takes the rightmost element as the pivot and puts
 all smaller elements to the front of the pivot. This is repeated until sorted. Uses the middle
 element of the array.

  - by Michael Sharp
  - msharp.oh@gmail.com
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

(function() {

  //populate test array
  var numArray = [];
  for(var i = 0; i < 500; i++) {
    numArray.push(Math.round(Math.random() * 1000));
  }
  console.log(numArray);

  var left = 0;
  var right = numArray.length - 1;

  //sort test array
  var result = quickSort(numArray, left, right);
  console.log(result);

  /*
  quickSort function
  -----------------
    - This function recursively sorts the array by computing the index of the pivot
      and then dividing the array into two subarrays.

      @param {array}: array to be sorted
      @param {left}: left-most element in the array
      @param {right}: right-most element in the array
  */
  function quickSort(array, left, right) {
    var index = partition(array, left, right);

    if(left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if(index < right) {
      quickSort(array, index, right);
    }
    return array;
  }
  /*
  quickSort partition function
  -----------------
    - This function computes a pivot (in this case the middle element) and puts
      everything lower than the pivot to the left and higher to the right.
  */
  function partition(array, left, right) {
    var i = left, j = right;
    var pivot = array[Math.floor((left + right) / 2)];

    while(i <= j) {
      while(array[i] < pivot) {
        i++;
      }
      while(array[j] > pivot) {
        j--;
      }

      if(i <= j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
      }
    }
    return i;
  }
})();
