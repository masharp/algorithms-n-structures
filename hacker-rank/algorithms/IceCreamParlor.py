"""
* Ice Cream Parlor (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/icecream-parlor
"""

testAA = 4
testAB = [1, 4, 5, 3, 2]
testBA = 4
testBB = [2, 2, 4, 5]

def findIceCreams(cash, flavors):
    length = len(flavors)

    for x in xrange(0, length):
        for y in xrange(0, length):
            purchase = 0
            if (x != y): purchase = flavors[x] + flavors[y]
            if cash - purchase == 0: return [x + 1, y + 1]

result = findIceCreams(testAA, testAB)
print result
