/**
 * My solution to CodeEval's Prime Palindrome, using three functions.
 * https://www.codeeval.com/open_challenges/3/
 */


/* function that checks if a number is prime by calculating the remainder of division
 * from 2 to the numbers square root */
function checkPrime(n) {
  if (n % 2 === 0) return false;
  var root = Math.sqrt(n) | 0; // sqrt saves us from checking all ints up to n

  for (var i = 2; i <= root; i++) {
    if (n % i === 0) return false; // if divides evenly, not a prime number
  }

  return true;
}

/* function that checks if a number/string is prime by comparing each pair
 * of numbers from beginning to end for equality */
function checkPalindrome(s) {
  for (var i = 0, l = s.length; i < l; i++) {
    if (s[i] !== s[l - i - 1]) return false; // check i and its pair at the end
  }
  return true;
}

/* main function that checks if a number is both prime and a palindrome */
function primePalindrome() {
  var lrgst = 2; // 1 is prime, so we skip it
  for (var i = 3; i <= 1000; i++) {
    if (checkPrime(i) && checkPalindrome(String(i))) lrgst = i;
  }
  return lrgst;
}

console.log(primePalindrome());
