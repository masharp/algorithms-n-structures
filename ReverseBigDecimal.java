/* Sorts a BigDecimal Array in reverseOrder 
    - by Michael Sharp
    - msharp.oh@gmail.com 
    - www.softwareontheshore.com */

import java.io.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;

public class Solution {
    static Scanner in = new Scanner(System.in);
    
    public static void main(String[] args) {
        int n = in.nextInt();
        BigDecimal[] bigDecimalArray = new BigDecimal[n];
        
        for (int i = 0; i < n; i++) {
            bigDecimalArray[i] = in.nextBigDecimal();
         }
        
        Arrays.sort(bigDecimalArray, Collections.reverseOrder());
        
        for (BigDecimal big : bigDecimalArray) {
            System.out.println(big);
        }
    }
}
