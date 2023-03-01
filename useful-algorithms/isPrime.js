/**
 * Uses a loop to check all digits below a values square root to determine if
 * an integer is prime
 */


function isPrime(num) {
  const n = Number(num);

  for (let x = 2; x < Math.sqrt(n); x++) {
    if (n % x === 0) return false;
  }

  return true;
}
