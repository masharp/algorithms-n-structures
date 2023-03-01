
/* This algorithm uses a regex pattern to find valid IP addresses from a list of string inputs */

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Scanner;

class ValidIPRegex {
    static Scanner in = new Scanner(System.in);

    public static void main(String[] args) {

        while(in.hasNext()) {
            String ip = in.next();
            System.out.println(ip.matches(new myRegex().pattern));
        }
    }
}

public class myRegex {
    String pattern = "^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
		"([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
		"([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
		"([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";
}
