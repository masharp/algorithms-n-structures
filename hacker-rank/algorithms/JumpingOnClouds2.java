/**
 * Java Solution to Jumping on Clouds: Revisted HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited
 */

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {

        int n = in.nextInt();
        int k = in.nextInt();
        int e = 100; // starting energy

        int c[] = new int[n]; // cloud array

        for (int c_i = 0; c_i < n; c_i++){
            c[c_i] = in.nextInt();
        }

        /* increment x by k (size of jump) */
        for (int x = 0; x < n; x += k) {
            int jump = (x + k) % n; // calculate the index of a jump based on starting pos
            int element = c[jump];

            if (element == 1) {
                e -= 3;
            } else {
                e -= 1;
            }
        }

        System.out.print(e);
    }
}
