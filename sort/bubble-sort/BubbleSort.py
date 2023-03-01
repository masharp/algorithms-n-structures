"""
This is a Bubble Sort sorting algorithm that compares each element in pairs
of adjacent elements.
"""
numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234, 6663,
            99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873, -19, 928282,
            4759302, 0, 2938, 21, 222, 98, 1293, 8483, 988, -9, 8888, -22,
            999999, 22222 ];

def bubbleSort(array):
    a = array[:]
    length = len(array)

    for x in xrange(0, length - 1):
        for y in xrange(1, length):
            temp = None

            if (a[y] < a[y - 1]):
                temp = a[y]
                a[y] = a[y - 1]
                a[y - 1] = temp

    return a

print bubbleSort(numArray)
