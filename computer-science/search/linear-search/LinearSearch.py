"""
This is a Linear Search searching algorithm that searches each element of an
arraylinearly to find the target item

  - by Michael Sharp
  - michael@softwareontheshore.com
  - www.softwareontheshore.com
"""

numArray = [ 12, 122, 222, 4, 5, 9, 12323, 99, 10, 1, 78, 123, 64234,
                  6663, 99, 46, 2, 124, 18, 22, 144, 1235, 29772, 1912873,
                  -19, 928282, 4759302, 0, 2938, 21, 222, 98, 1293, 8483,
                  988, -9, 8888, -22, 999999, 22222 ]

def linearSearch(array, target):
    a = array
    length = len(array)

    for x in xrange(0, length):
        element = a[x]

        if element == target: return x

    return -1

print linearSearch(numArray, 9)
