/* Consider an array of N integers, A . The distance between two indices, i and j, is denoted by
Dij = |i - j| <---- ABSOLUTE VALUE

Given A, find the minimum such that and Ai = Aj and i != j. In other words,
find the minimum distance between any pair of equal elements in the array.
If no such value exists, print - 1.

Input Format

The first line contains an integer, N, denoting the size of array A.
The second line contains N space-separated integers describing the respective elements in array A.

Sample Input

6
7 1 3 4 1 7

Sample Output

3

Explanation
Here, we have two options:
A1 and A4 are both 1, so D14 = |1 - 4| = 3
A0 and A5 are both 7, so D05 = |0 - 5| = 5
answer is min(3, 5) = 3
*/
