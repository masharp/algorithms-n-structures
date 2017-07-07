public class Shell {
    public static void sort(Comparable[] a) {
        int N = a.length;
        int h = 1;

        while (h < N / 3) h = 3 * h + 1; // 1, 4, 13, 40, 121....

        while (h >= 1) {

            /* h-sort array */
            for (int i = h; i < N; i++) {

                /* insert a[i] among a[i - h], a[i - 2*h], a[i - 3*h] ... */
                for (int j = i; j >= h && isLess(a[j], a[j - h]); j -= h) {
                    exchange(j, j - h);
                }
            }

            h = h / 3;
        }
    }
}
