"""
* Two Arrays (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/two-arrays
"""

testAA = 10
testAB = '2 1 3'
testAC = '7 8 9'
testBA = 5
testBB = '1 2 2 1'
testBC = '3 3 3 4'

def checkPermSum(target, listA, listB):
    listA = map(int, listA.split(' '))
    listB = map(int, listB.split(' '))

    listA = sorted(listA) # increasing value
    listB = sorted(listB, reverse = True) # decreasing value

    # compare the lowest of A and the highest of B to see if it fits parameters
    # if one doesn't the test case doesn't
    for x in xrange(len(listA)):
        if listA[x] + listB[x] < target:
            return 'NO'

    return 'YES'

result = checkPermSum(testBA, testBB, testBC)
print result
