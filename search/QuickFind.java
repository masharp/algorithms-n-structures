/* eager approach to dynamic connectivity problem */
public class QuickFind {
    private int[] id;

    /* initialize our id array by 1:1 indexing */
    public QuickFind(int N) {
        id = new int[N];

        /* growth of N for initialization */
        for (int x = 0; x < N; x++) {
            id[x] = x;
        }
    }

    /* add a connection between p and q
     * growth is quadratic (N^2) on an N object set */
    public void union(int p, int q) {
        int pID = id[p];
        int qID = id[q];

        for (int x = 0; x < id.length; x++) {
            if (id[x] == pID) id[x] = qID;
        }
    }

    /* are p and q in the same connected component
     * growth is constant (1) on an N object set */
    public boolean connected(int p, int q) {
        return id[p] == id[q];
    }
}
