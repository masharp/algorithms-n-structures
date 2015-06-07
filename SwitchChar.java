/* A method that takes the first and last characters in a string and switches them
 - by Michael Sharp
 - msharp.oh@gmail.com */


public class SwitchChar {
    public static void main(String[] args) {
        System.out.println(SwitchChar("Hello"));
        System.out.println(SwitchChar("Monica"));
        System.out.println(SwitchChar("Bummer man"));
        System.out.println(SwitchChar(""));
    }
    public static String SwitchChar(String str) {
        char first, last;
        char[] charArray = str.toCharArray();
        int length = (charArray.length-1);
        String newString = "";

        if (str.isEmpty() == true) {
          return str;
        } else {
         first = charArray[0];
         last = charArray[length];
         charArray[0] =  last;
         charArray[length] = first;

         for (char c : charArray) { newString += c;}
         return newString;
        }
    }
}
