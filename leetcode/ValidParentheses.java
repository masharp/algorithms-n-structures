/**
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 */
class Solution {
    public boolean isValid(String s) {
       Stack<Character> pancakes = new Stack<Character>();
        
        for (Character x : s.toCharArray()) {
            switch (x) {
                case '(' -> pancakes.push(')');
                case '[' -> pancakes.push(']');
                case '{' -> pancakes.push('}');
                default -> {
                     if (pancakes.isEmpty() || pancakes.pop() != x) return false;
                }
            }
        }
        
        return pancakes.isEmpty();
    }
}