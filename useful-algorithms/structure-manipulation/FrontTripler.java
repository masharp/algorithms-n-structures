/* A method for taking the first three characters of a string and tripling it
    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

import java.util.Scanner;

public class FrontTripler {

    static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {
        tripleTheFront(in.nextLine());
    }

  public static void tripleTheFront(String str) {
    char[] charArray = str.toCharArray();
    String newString = "";

    if (charArray.length <= 3) {
        for (int i = 0; i < charArray.length; i++) {
        newString += charArray[i];
        }
    } else {
        for (int i = 0; i < 3; i++) {
        newString += charArray[i];
        }
    }

    //ugly, think about fixing
    System.out.println(newString+newString+newString);
  }
}
