/* Created by Michael Sharp
Program that takes two values and finds the prime number between them
such that m <= p <= n. uses the sieve of eratosthanese algorithm
*/

import java.util.Arrays;
import java.util.Scanner;

public class PrimeNumberSieve {
  public static void main(String[] args) throws java.lang.Exception {
      Scanner in = new Scanner(System.in);
      long m, n;

      m = in.nextLong();
      n = in.nextLong();
      Integer length = (int)(long) n;
      
      boolean[] primeArray = new boolean[length + 1];

      for (int i = 0; i <= n; i++) {
          primeArray[i] = true;
      }

      for (int i = 2; i*i <= n; i++) {
          if (primeArray[i]) {
              for (int j = i; i*j <= n; j++) {
                  primeArray[i*j] = false;
              }
          }   
      }
      for (int i = 1; i <= n; i++) {
          if (primeArray[i]) System.out.println(i);
      }
  }     
}
