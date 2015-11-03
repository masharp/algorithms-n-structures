/* This is a Merge Sort sorting algorithm that divides itself in half and calls itself until sorted and then merges
  the two halves into a single sorted array;

  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com

  ----------------------------
  Psudocode:
    -   mergeSort
      if p < r
        then q = floor(p + r / 2)
          mergeSort(A, p, q)
          mergeSort(A, q+1, r)
          merge(A[p..q], A[q+1..r])

    - merge
         while left.length > 0 && right.length > 0
            if left < right
              result.push(left)
              left++
            else
              result.push(right)
              right++
          if left.length > 0
            result.push(left)
          if right.length > 0
            result.push(right)
          return result
  */

  (function() {

    //populate test array
    var numArray = [];
    for(var i = 0; i < 25; i++) {
      numArray.push(Math.round(Math.random() * 100));
    }
    console.log(numArray);

    var left = 0;
    var right = numArray.length - 1;

    //sort test array
    var result = mergeSort(numArray, left, right);
    console.log(result);

    /*
    mergeSort Function
    -----------------
      - This function takes the middle element of the array and then divides the
        passed array into two smaller arrays and recursively performs mergeSort.
        The two smaller arrays are then passed to a merge function that sorts and
        combines them into a single sorted array.

        @param [array]: array to be sorted
        @return: merged single sorted array
    */
    function mergeSort(array) {
      if(array.length < 2) {
        return array;
      }
        var middle = Math.floor(array.length / 2);
        var left = array.split(0, middle);
        var right = array.split(middle);

        return merge(mergeSort(left), mergeSort(right));
    }
    /*
    merge Function
    -----------------
      - This function sorts the two arrays by combining the smaller array with the larger
        to produce a single sorted array

        @param [leftArray]: left half of the original unsorted array
        @param [rightArray]; right half of the original unsorted array
        @return: a combined sorted array
    */
    function merge(leftArray, rightArray) {
      var result = [];
      var i = 0;
      var j = 0;

      while(i < leftArray.length && j < rightArray.length) {
        if(leftArray[i] < rightArray[j]) {
          result.push(leftArray[i]);
          i++;
        } else {
          result.push(rightArray[j]);
          j++;
        }
      }

      while(i < leftArray.length) {
        result.push(leftArray[i]);
        i++;
      }
      while(j < rightArray.length) {
        result.push(rightArray[j]);
        j++;
      }
      return result;
    }
  })();
