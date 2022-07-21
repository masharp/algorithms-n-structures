/* lazy approach to dynamic connectivity problem */
public class QuickUnion {
    private int[] id;

    /* initialize our id array by 1:1 indexing */
    public QuickUnion(int N) {
        id = new int[N];

        /* growth of N for initialization */
        for (int x = 0; x < N; x++) {
            id[x] = x;
        }
    }

    /* find the root of an item by chasing parent until i == id[i] */
    private int root(int i) {
        while (i != id[i]) i = id[i];

        return i;
    }

    /* adjust the root of p to match root of q
     * growth is at a rate of N (including root operations) */
    public void union(int p, int q) {
        int x = root(p);
        int y = root(q);

        id[x] = y;
    }

    /* are p and q in the same component checking if same root
     * growth is a worst case of N */
    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }
}
