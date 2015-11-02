/* This is an implementation of Insertion Sort. Each element of an unsorted array is added to a sorted array.
  The 'sorted array' is then sorted with Insertion Sort. During this step, the last element, which is
  unsorted, is then sorted. The algorithm shifts elements larger than the unsorted value to the right one
  index until an element less than or equal to the value is found. The value is then inserted there.

    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com
    ------------------------------------

    Psudocode:
      - Add the new value to a sorted or empty Array
      - For each element in the array
        if element > newValue
          element + 1 = element
        if element < newValue
          element + 1 = newValue
        if at the beginning of array
          element + 1 = element
          element = newValue
*/
(function() {


  var numArray = [];
  var sortedArray = [];

  //populate test array
  for(var i = 0; i < 250; i++) {
    numArray.push(Math.round(Math.random() * 100));
  }
  console.log(numArray);


  //sort test array
  while(numArray.length > 0) {
    var newValue = numArray.pop();

    sortedArray.push(newValue);
    sortedArray = insertionSort(sortedArray);
  }

  console.log(sortedArray);

  function insertionSort(array) {
    var unsortedValue = array[array.length - 1];

    for(var i = array.length - 2; i >= 0; i--) {
      if(array[i] >= unsortedValue) {
        array[i + 1] = array[i];

      }
      if(array[i] < unsortedValue) {
        array[i + 1] = unsortedValue;
        break;

      }
      if(i == 0) {
        array[i + 1] = array[i];
        array[i] = unsortedValue;

      }
    }
    return array;
  }
})();
