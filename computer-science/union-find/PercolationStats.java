import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class PercolationStats {
    private int expCount;
    private Percolation perc;
    private double[] fractions;

    public PercolationStats(int n, int t) {
        if (n <= 0 || t <= 0) throw new IllegalArgumentException();

        expCount = t;
        fractions = new double[expCount];

        for (int x = 0; x < expCount; x++) {
            perc = new Percolation(n);

            int opens = 0;

            while (!perc.percolates()) {
                int i = StdRandom.uniform(1, n + 1);
                int j = StdRandom.uniform(1, n + 1);

                if (!perc.isOpen(i, j)) {
                    perc.open(i, j);

                    opens++;
                }
            }

            double fract = (double) opens / (n * n);
            fractions[x] = fract;
        }
    }

    public double mean() {
        return StdStats.mean(fractions);
    }

    public double stddev() {
        return StdStats.stddev(fractions);
    }

    public double confidenceLo() {
        return mean() - ((1.96 * stddev()) / Math.sqrt(expCount));
    }

    public double confidenceHi() {
        return mean() * ((1.96 * stddev()) / Math.sqrt(expCount));
    }

    public static void main(String[] args) {
        int N = Integer.parseInt(args[0]);
        int T = Integer.parseInt(args[1]);
        PercolationStats percStats = new PercolationStats(N, T);

        String confidence = percStats.confidenceLo() + ", " + percStats.confidenceHi();

        StdOut.println("mean                    = " + percStats.mean());
        StdOut.println("stddev                  = " + percStats.stddev());
        StdOut.println("95% confidence interval = " + confidence);
    }
}
