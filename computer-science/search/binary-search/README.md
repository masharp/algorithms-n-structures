Binary Search, also known as half-interval search or logarithmic search, finds
the position of the target within a sorted array. Binary Search runs in at worst
logarithmic time, making O(log n) comparisons and usually only constant O(1) space.
Although specialized data structures, such as hash tables, can be searched more
efficiently, Binary Search applies to a wider range of search problems.  

Iterative Binary Search requires constant space, while Recursive Binary Search
quires space proportional to the number of comparisons to maintain the recursion
stack.  

###Analysis

Best Case: O(1) - The target value is the middle of the array  
Average Case: O(log n)  
Worst Case: O(log n) - The target does not exist at all.
