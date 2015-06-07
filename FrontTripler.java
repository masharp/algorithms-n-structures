/* A method for taking the first three characters of a string and tripling it
    - by Michael Sharp
    - msharp.oh@gmail.com
*/
public class FrontTripler {
    
    public static void main(String[] args) {
        System.out.println(FrontTripler("Hello"));
        System.out.println(FrontTripler("Monica"));
        System.out.println(FrontTripler("Bummer man"));
        System.out.println(FrontTripler("hi"));
    }
  public static String FrontTripler(String str) {
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
    return (newString+newString+newString);
  }
}
