/*  This is an implementation of an algorithm to recursively find the result
    of a number raised to a power.

    by Michael Sharp
    www.softwareontheshore.com
    michael@softwareontheshore.com
    ---------------------------------
    Psudocode:

*/
var num = Math.floor(Math.random() * 50);
var power = Math.floor(Math.random() * 10);
var result = findPower(num, power);

console.log("Num: " + num);
console.log("Power: " + power);
console.log(result);

function findPower(num, power) {
  //Base case
  if(power == 0) {
    return 1;
  }
  //Recursive Case: if power is odd
  if(power < 0) {
    return 1 / power(num, -power);
  }
  //Recursive Case: if power is odd
  if(power % 2 !== 0) {
    return (findPower(num, power - 1) * num);
  }
  //Recursive Case: if power is even
  if(power % 2 == 0) {
    var y = power(num, power/2);
    return y * y;
  }
}
