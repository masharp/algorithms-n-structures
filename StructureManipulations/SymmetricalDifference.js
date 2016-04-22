/* A series of JavaScript methods for finding the symmetricalDifference in two arrays at a time, out of
  many possible called arguments. Also removes duplicates in individual arrays.

    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

function symmetricalDifference() {
  var args =  Array.prototype.slice.call(arguments); //puts the arguments sent to the function into an array

  /*first filters out duplicates in each argument array, then finds the difference by comparing
    the difference of the first and second with the second and first array and so on
    until there are no more arguments */
  return args.map(uniqueify).reduce(function(first, second) {
    return difference(first, second).concat(difference(second, first));
  });
}

//finds the difference in two arrays by filtering
function difference(arrayA, arrayB) {
  return arrayA.filter(function(element) {
    return arrayB.indexOf(element) == -1;
  });
}

//removes duplicate items in the array by filtering out the current index
function uniqueify(array) {
  return array.filter(function(element, index) {
    return array.indexOf(element) == index;
  });
}
