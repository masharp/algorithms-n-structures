/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> values = new HashMap<Integer, Integer>(); // value, index
        int index = 0;
        
        for (int x : nums) {
            int t = target - x;
            
            
            if (values.get(t) != null) {
                return new int[]{values.get(t), index}; // Assume exactly 1
            }
            
            values.put(x, index);
            index++;
        }
        
        return new int[0];
        
    }
}