Bubble Sort, also known as Sinking Sort, compares each pair of adjacent items
and swaps them if they are in the wrong order. Although the algorithm is simple,
it is too slow and impractical for most problems even when compared to
Insertion Sort. It can be practical for inputs that are usually in sorted order.  

The only advantage to Bubble Sort is that it has the ability to detect if a list
is sorted built into the algorithm, therefor avoiding wasted list operations.
Insertion Sort, however, also has this mechanism and often performs better.  

###Analysis

Worst Case: O(n^2) - Every item needs sorted  
Average Case: O(n^2)  
Best Case: O(n) - The list is already sorted  
