import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private boolean[][] open;
    private int top = 0;
    private int bottom;
    private int sz;
    private int numberOpen = 0;
    private WeightedQuickUnionUF wqu;

    public Percolation(int n) {
        sz = n;
        bottom = sz * sz + 1;
        open = new boolean[sz][sz];
        wqu = new WeightedQuickUnionUF(sz * sz + 2);
    }

    private void checkArguments(int row, int col) {
        if (row < 1 || row > sz || col < 1 || col > sz) throw new IllegalArgumentException();
    }

    private int getIndex(int row, int col) {
        return sz * (row - 1) + col;
    }

    public void open(int row, int col) {
        checkArguments(row, col);
        if (isOpen(row, col)) return;

        open[row - 1][col - 1] = true;
        numberOpen++;

        if (row == 1) {
            wqu.union(getIndex(row, col), top);
        }

        if (row == sz) {
            wqu.union(getIndex(row, col), bottom);
        }

        if (col > 1 && isOpen(row, col - 1)) {
            wqu.union(getIndex(row, col), getIndex(row, col - 1));
        }

        if (col < sz && isOpen(row, col + 1)) {
            wqu.union(getIndex(row, col), getIndex(row, col + 1));
        }

        if (row > 1 && isOpen(row - 1, col)) {
            wqu.union(getIndex(row, col), getIndex(row - 1, col));
        }

        if (row < sz && isOpen(row + 1, col)) {
            wqu.union(getIndex(row, col), getIndex(row + 1, col));
        }
    }

    public boolean isOpen(int row, int col) {
        checkArguments(row, col);

        return open[row - 1][col - 1];
    }

    public boolean isFull(int row, int col) {
        checkArguments(row, col);

        return wqu.connected(top, getIndex(row, col));
    }

    public int numberOfOpenSites() {
        return numberOpen;
    }

    public boolean percolates() {
        return wqu.connected(top, bottom);
    }
}
