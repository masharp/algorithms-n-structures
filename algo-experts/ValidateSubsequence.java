import java.util.*;

class Program {
  public static boolean isValidSubsequence(List<Integer> array, List<Integer> sequence) {
    int arrayIndex = 0;
    int sequenceIndex = 0;

    while (arrayIndex < array.size() && sequenceIndex < sequence.size()) {
      if (array.get(arrayIndex).equals(sequence.get(sequenceIndex))) {
        sequenceIndex++;
      }
      arrayIndex++;
    }

    return sequenceIndex == sequence.size();
  }
}
