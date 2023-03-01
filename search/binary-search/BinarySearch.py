"""
This is a BinarySearch searching algorithm that divides in half the portion of the list that contains the item
unit narrowed to just one. Returns the index of the item or -1 if not found.
"""

numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234,
                  6663, 99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873,
                  -19, 928282, 4759302, 0, 2938, 21, 222, 98, 1293, 8483,
                  988, -9, 8888, -22, 999999, 22222 ]

def binarySearch(array, target):
    a = sorted(array) # sort array using built in function
    t = target

    minimum = 0 # beginning of list
    maximum = len(a) - 1 # end of list

    ## split list in half until target is found or -1 is returned
    while minimum <= maximum:
        g = (minimum + maximum) // 2

        if a[g] == t: return g
        elif a[g] < t: minimum = g + 1
        else: maximum = g - 1

    return -1 # not found

print binarySearch(numArray, 122)
