/** Solution to Code Eval's Sum of Primes challenges
* https://www.codeeval.com/open_challenges/4/
*/

'use strict';

/* function that checks if a number is prime */
function checkPrime(n) {
  if (n % 2 === 0) return false; // short curcuit if an even number
  const root = Math.sqrt(n) | 0;

  for (let i = 2; i <= root; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function sumOfPrimes(n) {
  let sum = 2; // sum of first N prime numbers (start with 2, even but prime)
  let primes = 1; // track number of primes up to n (include 2)
  let x = 3; // ascending numbers to check if prime (start after 2)

  while (primes < n) {
    if (checkPrime(x)) {
      sum += x;
      primes++;
    }

    x++
  }

  return sum;
}

console.log(sumOfPrimes(1000));
