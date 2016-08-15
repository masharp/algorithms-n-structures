/*Implements a Caesar's Cipher that only affects letter character inputs
    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

import java.io.*;
import java.util.*;

public class CaesarCipher {

    public static void main(String[] args) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        Pattern pattern = Pattern.compile("[A-Za-z]");
        Matcher matcher;

        int length = Integer.valueOf(in.readLine());
        String inputCypher = in.readLine().trim();
        int k = Integer.valueOf(in.readLine());

        char[] inputArray = new char[length];
        char[] encryptedArray = new char[length];

        inputArray = inputCypher.toCharArray();

        if (k > 26 && k <= 52) k -= 26;
        if (k > 52 && k <= 78)  k -= 52;
        if (k > 78 && k <= 100) k -= 78;

        for (int i = 0; i < inputArray.length; i++) {
            if (Character.isLetter(inputArray[i])) {
                encryptedArray[i] = inputArray[i];
                if (Character.isUpperCase(encryptedArray[i])) {
                    if (((encryptedArray[i] + k) <= 90) && ((encryptedArray[i] + k) >= 65)) {
                        encryptedArray[i] += k;
                    }
                    else if ((encryptedArray[i] + k) > 90) {
                        encryptedArray[i] += k;
                        encryptedArray[i] -= 26;
                    }
                }
                if (Character.isLowerCase(encryptedArray[i])) {
                    if (((encryptedArray[i] + k) <= 122) && ((encryptedArray[i] + k) >= 97)) {
                        encryptedArray[i] += k;
                    }
                    else if ((encryptedArray[i] + k) > 122) {
                        encryptedArray[i] += k;
                        encryptedArray[i] -= 26;
                    }
                }
            }
            else if (!Character.isLetter(inputArray[i])) {
                encryptedArray[i] = inputArray[i];
            }
            else
                encryptedArray[i] = inputArray[i];
        }

        for (char c : encryptedArray) {
            System.out.print(c);
        }
    }
}
