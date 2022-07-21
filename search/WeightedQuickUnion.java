/* eager approach to dynamic connectivity problem, combining
 * weighted union and path compression */
public class WeightedQuickUnion {
    private int[] id;
    private int[] size;

    /* initialize our id array by 1:1 indexing */
    public WeightedQuickUnion(int N) {
        id = new int[N];
        size = new int[N];

        /* growth of N for initialization */
        for (int x = 0; x < N; x++) {
            id[x] = x;
            size[x] = 1;
        }
    }

    /* find the root of an item by chasing parent until i == id[i] */
    private int root(int i) {
        while (i != id[i]) {
            /* flatten the tree by pointing every other examined node to grandparent
             * known as path compression */
            id[i] = id[id[i]];
            i = id[i];
        }

        return i;
    }

    /* growth of lgN */
    public void union(int p, int q) {
        int x = root(p);
        int y = root(q);

        if (x == y) return;

        /* attach root of smaller tree to root of large tree */
        if (size[x] < size[y]) {
            id[x] = y;
            size[y] += size[x];
        } else {
            id[y] = x;
            size[x] += size[y];
        }
    }

    /* are p and q in the same component checking if same root
     * growth is a worst case of N */
    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }
}
