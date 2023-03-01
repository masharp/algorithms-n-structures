/* This algorithm is designed to take N length substrings from a string and sort them
   lexicographically in ascending order. */

import java.io.*;
import java.util.*;

public class SubStringSort {

    static Scanner in = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        //original string and length N
        String str = in.nextLine();
        int length = in.nextInt();

        String largestSub, smallestSub;
        String subStr = "";

        //ArrayList to store substrings, in order to allow for dynamic growth or contraction
        ArrayList<String> strArray = new ArrayList<String>();

       for (int i = 0; i < str.length() - 1; i++) {
           if (i + length <= str.length()) { //avoids out of bounds issues
               subStr = str.substring(i, i + length);
               strArray.add(subStr);
           }
           else break;
       }

       //Collection methods allow for lexicographical sort
       Collections.sort(strArray);

       smallestSub = strArray.get(0);
       largestSub = strArray.get(strArray.size() - 1);

       System.out.println(smallestSub + "\n" + largestSub);
    }
}
