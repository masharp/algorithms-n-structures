import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
     // First put each number in a map for better lookup
    HashMap<Integer, Boolean> values = new HashMap<Integer, Boolean>();
    for (int i : array) {
      values.put(i, true);
    }

    // Find the target sum
    for (int v : array) {
      int lookingFor = targetSum - v;
      
      if (lookingFor == v) {
        continue;
      }
      
      if (values.get(lookingFor) != null) {
        return new int[]{v, lookingFor};
      }
    }

    return new int[0];
  }
}
