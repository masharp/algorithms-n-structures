//A function to repeat a string S by N times

public static String repeat(String s, int N) {
        return new String(new char[N]).replace("\0", s);
}
