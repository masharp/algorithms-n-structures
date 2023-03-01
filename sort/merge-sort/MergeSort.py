"""
This is a Merge Sort sorting algorithm that divides itself in half and calls itself
until sorted and then merges the two halves into a single sorted array. Sorts in
ascending order.
"""
numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
                  99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
                  4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
                  999999, 22222 ]

def merge(left, right):
    result = []

    ## merge the two arrays by sorting and popping
    while (len(left) and len(right)):
        if left[0] < right[0]: result.append(left.pop(0))
        else: result.append(right.pop(0))

    ## merge the remaining elements of each array
    while len(left): result.append(left.pop(0))
    while len(right): result.append(right.pop(0))

    return result

def mergeSort(array):
    length = len(array)

    if length < 2: return array # if less than 2, array is sorted

    pivot = length // 2 # floor division to find middle
    left = array[0:pivot]
    right = array[pivot:]

    ## recursively call mergesort on left and right until divided and then merge them
    return merge(mergeSort(left), mergeSort(right))

print mergeSort(numArray)
