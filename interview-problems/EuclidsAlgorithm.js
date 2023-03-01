/* This algorithm implements Euclid's Algorithm to find the greatest common divisor of two integers. */

function euclidsDivisor(a, b) {
  var remainder = a % b;

  if(remainder == 0) {
    return b;
  } else {
    return euclidsDivisor(b, remainder);
  }
}
var numA = 13923490;
var numB = 1239;
console.log("The greatest common divisor is: " + euclidsDivisor(numA, numB));
