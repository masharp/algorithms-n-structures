/* A method that takes the first and last characters in a string and switches them
 - by Michael Sharp
 - michael@softwareontheshore.com
  - www.softwareontheshore.com */

import java.util.Scanner;

public class SwitchChar {
    static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        charSwitcher(in.nextLine());
    }

    public static void charSwitcher(String str) {
        char first, last;
        char[] charArray = str.toCharArray();

        int length = (charArray.length-1);
        String newString = "";

        //checks in the string has a value
        if (str.isEmpty() == true) {
            System.out.println(str);
        }

        else {
         first = charArray[0];
         last = charArray[length];
         charArray[0] =  last;
         charArray[length] = first;

         for (char c : charArray) { newString += c;}
            System.out.println(newString);
        }
    }
}
