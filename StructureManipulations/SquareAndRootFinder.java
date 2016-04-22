/* This function uses an algorithm to find the number of square numbers within a range of numbers. The integer number checker is useful.

    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

public static int squareCount(int a, int b) {
            int count = 0;
            double rootOfNum = 0;
            int firstRoot = 0;
            int nextSquare = 0;

            for (int i = a; i <= b; i++) {
                rootOfNum = Math.sqrt(i);

		//checks if is an integer (not a float) and !infinite
                if (rootOfNum == Math.floor(rootOfNum) && !Double.isInfinite(rootOfNum)) {
                    firstRoot = (int) rootOfNum;
                    nextSquare = (int) Math.pow((firstRoot + 1), 2);
                    count++;

                    if (nextSquare > b) {
                        break;
                    }
                    else i = nextSquare - 1;
                }
            }
            return count;
        }
