/* This is a standard Insertion Sort function for taking the last element of the array,
  which is recently added, and sorting it into the sorted portion of the array.

    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com
*/
(function() {

  //populate test array
  var numArray = [];
  for(var i = 0; i < 500; i++) {
    numArray.push(Math.round(Math.random() * 1000));
  }
  console.log(numArray);



  //sort test array
  for(var j = 0; j < numArray.length; j++) {
    numArray = insertionSort(numArray);
  }
  console.log(numArray);

  function insertionSort(array) {
    var temp = 0;
    var unsortedValue = array[array.length - 1];

    for(var i = array.length - 2; i >= 0; i--) {
      if(array[i] >= unsortedValue) {
        array[i + 1] = array[i];
      }
      if(array[i] < unsortedValue) {
        array[i + 1] = unsortedValue;
      }
      if(i == 0) {
        array[i + 1] = array[i];
        array[i] = unsortedValue;
      }
    }
  }
})();
