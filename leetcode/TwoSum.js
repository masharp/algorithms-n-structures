/**
 * https://leetcode.com/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Track the numbers we've seen so far
    let map = {};
    // Track the current index
    let index = 0;

    for (num of nums) {
        // Find the number we need to add to the current number to reach the target
        let find = target - num;

        // If we've seen the number we need to add to the current number to reach the target, return the indices
        if (map[find] !== undefined) {
            // Assume there is exactly one solution
            return [map[find], index];
        }

        // If we haven't seen the number we need to add to the current number to reach the target, add the current number to the map
        map[num] = index;
        index++;
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
