/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        $replaced = preg_replace('/[^a-z0-9]/','', strtolower($s));
        
        if (empty($replaced)  || strlen($replaced) == 1) {
            return true;
        }
        
        $front = 0;
        $end = strlen($replaced) - 1;
        
        while ($front < $end) {
            if ($replaced[$front] !== $replaced[$end]) {
                return false;
            }
            
            $front = $front+1;
            $end = $end-1;
        }
        
        return true;
   