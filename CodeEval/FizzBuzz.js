/**
 * My solution to the CodeEval challenge 'Fizz Buzz'
 * https://www.codeeval.com/open_challenges/1/
 * Difficulty: Easy
 *
 * michael@softwareontheshore.com
 */

/**
 * This is my final solution which achieves 100/100 points. I replaced const and let
 * declarations with var and used process.stdout instead of an array and console.log
 * in order to print the fizzbuzz calculations on a single line and to save memory
 * by not allocating an array.
 */

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach((test) => { // read file
  if (test != "") {
    var params = test.split(' ');
    var f = params[0]; // first num (fizz)
    var b = params[1]; // second num (buzz)
    var len = params[2]; // length of game

    for (var i = 1; i <= len; i++) {
      if (i % f == 0 && i % b == 0) process.stdout.write('FB');
      else if (i % f == 0) process.stdout.write('F');
      else if (i % b == 0) process.stdout.write('B');
      else process.stdout.write(i + '');

      if (i < len) process.stdout.write(' ');
      else process.stdout.write('\n');
    }
  }
});


/**
 * This was my first attempt using modern variable declaration and
 * an array to store the fizzBuzz calculations
 *
 * This result achieved 75/100 points. This is due to memory usage, I believe
 */
'use strict';

const fs  = require("fs");
const file = fs.readFileSync(process.argv[2]).toString().split('\n');

for (let x = 0, y = file.length; x < y; x++) {
  if (file[x] !== "") {
      const params = file[x].split(' ');
      const f = Number(params[0]);
      const b = Number(params[1]);
      const len = Number(params[2]);
      let result = [];

      for (let x = 1; x <= len; x++) {
        let y = x;

        if (x % (f * b) === 0) y = 'FB';
        else if (x % f === 0) y = 'F';
        else if (x % b === 0) y = 'B';

        result.push(y);
      }

      console.log(result.join(' ').trim());
  }
}
