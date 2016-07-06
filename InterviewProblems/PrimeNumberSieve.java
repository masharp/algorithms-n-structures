/* Program that takes two values and finds the prime number between them
such that m <= p <= n. uses the sieve of eratosthanese algorithm
    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

import java.util.Arrays;
import java.util.Scanner;

public class PrimeNumberSieve {

  static Scanner in = new Scanner(System.in);

  public static void main(String[] args) throws java.lang.Exception {
      long m, n;

      m = in.nextLong();
      n = in.nextLong();
      Integer length = (int)(long) n;

      // initializes a bool array to sieve through the prime numbers in the range
      boolean[] primeArray = new boolean[length + 1];

      // begins the array with all true
      for (int i = 0; i <= n; i++) {
          primeArray[i] = true;
      }

      // sieve through the array and mark the non-primes
      for (int i = 2; i * i <= n;  i++) {
          if (primeArray[i]) {
              for (int j = i; i * j <= n; j++) {
                  primeArray[i * j] = false;
              }
          }
      }

      // whatever is still true in the array is prime and output
      for (int i = 1; i <= n; i++) {
          if (primeArray[i]) System.out.println(i);
      }
  }
}
