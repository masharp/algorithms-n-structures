/**
 * Java Solution to HackerRank's Algorithm Challenge Beautiful Triplets
 * https://www.hackerrank.com/challenges/beautiful-triplets
 */
 import java.io.*;
 import java.util.*;

 public class Solution {

     static Scanner in = new Scanner(System.in);

     public static void main(String[] args) {
         int n = in.nextInt();
         int d = in.nextInt();

         int[] c = new int[n];

         for (int i = 0; i < n; i++) {
             c[i] = in.nextInt();
         }

         //methodA(d, c);
         //methodB(d, c);

          System.out.println(b);

     }
 }

/* Brute Force Method that loops through the array in 3 loops to grab all
 * subsets of the array and run the calculation to see if they match solution
 *
 * Runs at O(n^3) but passes all test cases
 */
 public static int methodA(int d, int[] c) {
   int b = 0;

   for (int x = 0; x < n; x++) {
       for (int y = x + 1; y < n; y++) {
           if (c[y] - c[x] == d) {
               for (int z = y + 1; z < n; z++) {
                   if (c[z] - c[y] == d) {
                       b++;
                   }
               }
           }
       }
   }

   return b;
 }

/* Mathmatical solution that tests all possible i elements to see if they can be
*  the first element in a set. (i, i + d, i + d + d). A seive is used to
* quickly index if i + d and i + d + d exist in the test array
*
* Psudocode:
* flag = [0 for x in xrange(2 * 10000 + d + 1)]
* for value in tests:
*   flag[value] = 1
*
* answer = 0
* for value in tests:
*   if flag[value + d] and flag[value + d + d]:
*     answer++
* return answer
*/
