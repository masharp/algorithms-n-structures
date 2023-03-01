"""
 * Sherlock and Array (Python)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/sherlock-and-array
"""
testA = [1, 2, 3]
testB = [1, 2, 3, 3]
testC = [1, 1, 1, 1, 1, 5, 3, 2]

def sherlockArray(array):
    length = len(array)

    # catch arrays of length 1 - passes challenge
    if length == 1: return 'YES'

    # begin with a sum of each side. saves time complexity by adding and subtracting
    # from this
    sumRight = sum(array[1:])
    sumLeft = array[0]

    for x in xrange(1, length):
        sumRight -= array[x] # remove the current element from the right
        if sumLeft == sumRight: return 'YES'
        sumLeft += array[x] # add the current element to the left

    return 'NO'

result = sherlockArray(testC)
print result
