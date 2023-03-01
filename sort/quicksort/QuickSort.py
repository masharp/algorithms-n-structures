"""
QuickSort implementation in Python 2 using pythonic and functional styles.
Recursively divides the set in half and sorts both sides until whole set is sorted.
"""
numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222, 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ];

def quickSort(array):
    a = array
    l = len(array)

    if l < 2: return a ## return if array is of size 1, which is sorted
    p = a[l // 2] ## pivot found at middle index using floor division

    ## Filter list for lesser/greater/equal to pivot using list comprehension
    left = [x for x in a if x < p]
    pivot = [y for y in a if y == p]
    right = [z for z in a if z > p]

    ## Recursively call quicksort on left and right and concat
    return quickSort(left) + pivot + quickSort(right)

print quickSort(numArray)
