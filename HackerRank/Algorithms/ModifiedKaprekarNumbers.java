/**
 * HackerRank ModifiedKarekarNumber Algorithm (Java)
 * https://www.hackerrank.com/challenges/kaprekar-numbers
 *
 * Passes all but the last test case
 *
 * michael@softwareontheshore.com
 */

import java.util.ArrayList;
import java.util.Scanner;

public class ModifiedKarekarNumber {
	static Scanner in = new Scanner(System.in);

	public static void main(String[] args)  {
		int lowValue = in.nextInt();
		int highValue = in.nextInt();
		ArrayList<Integer> validNumbers = new ArrayList<Integer>();

		for (int n = lowValue; n <= highValue; n++) {
			if (isValidNumber(n)) validNumbers.add(n);
		}
		if (validNumbers.isEmpty()) System.out.println("INVALID RANGE");

		else {
			for (int num : validNumbers) {
				System.out.print(num + " ");
			}
		}
	}

	public static boolean isValidNumber(int num) {
		int squareNum = num * num;

	    int digits = (int)Math.floor(Math.log10(squareNum + 1)) + 1;

	    int d1 = digits / 2;
	    int d2 = digits - d1;

	    int numL = (int)(squareNum * Math.pow(10, d1 - digits));
	    int numR = squareNum - (int)(numL * Math.pow(10, d2));

	    return num == numL + numR;
	}
}
