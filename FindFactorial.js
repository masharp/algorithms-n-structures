/* A recursive function to find the factorial of a starting number -> zero. Useful for permutations.
    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com */

function findFactorial(n) {
  var result = 0;
  if(n === 1 || n === 0) { return 1; }
  return result = (factorialize(n - 1) * n);
}
