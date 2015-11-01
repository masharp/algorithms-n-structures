/* This is a Merge Sort sorting algorithm that divides itself in half and calls itself until sorted and then merges
  the two halves.

  - by Michael Sharp
  - msharp.oh@gmail.com
  - www.softwareontheshore.com

  ----------------------------
  Psudocode:


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

    -----------------
      -

        @param {array}: array to be sorted
        @param {left}: left-most element in the array
        @param {right}: right-most element in the array
    */
    function mergeSort(array, left, right) {
    }
    /*

    -----------------
      -
    */
    function partition(array, left, right) {
    }
  })();
