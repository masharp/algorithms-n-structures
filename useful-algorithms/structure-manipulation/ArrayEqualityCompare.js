/* A simple function that compares two arrays for equality, regardless of order.
    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

function checkArrayEquality(arrayA, arrayB) {
  if(arrayA.sort().join(',') === arrayB.sort().join(',')) {
      return true;
  } else {
    return false;
  }
}
