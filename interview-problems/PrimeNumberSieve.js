/** Program that takes two values and finds the prime number between them
 * such that m <= p <= n. Uses the Sieve of Eratosthanese algorithm
 */

/**
 * @param(int) n - max range of prime numbers
 */
function primeNumberSieve(n) {
  const max = n;
  const primeArray = [];

  /* begin array with all positive bools */
  for (let x = 0; x <= max; x++) {
    primeArray.push(true);
  }

  /* loop through array and register non-prime numbers */
  for (let i = 2; i * i <= max; i++) {
    if (primeArray[i]) {

    }
  }
}

console.log(primeNumberSieve(1000));
