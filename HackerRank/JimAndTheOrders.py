"""
* Jim and the Orders (Python)
* HackerRank Algorithm Challegen
* https://www.hackerrank.com/challenges/jim-and-the-orders
*
* michael@softwareontheshore.com
"""

testA = [[1, 3],[2, 3], [3, 3]]
testB = [[8, 1], [4, 2], [5, 6], [3, 1], [4, 3]]

def findDeliveryOrder(orders):
    result = {}
    length = len(orders)

    for x in xrange(length):
        total = orders[x][0] + orders[x][1]
        result[x + 1] = total

    return sorted(result, key = result.get)

result = findDeliveryOrder(testB)
print ' '.join(str(s) for s in result)
