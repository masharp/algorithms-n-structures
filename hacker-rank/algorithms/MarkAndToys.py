"""
* Mark and Toys (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/mark-and-toys
"""
testAA = [1, 12, 5, 111, 200, 1000, 10]
testAB = 50

def max_toys(prices, cash):
    result = 0
    length = len(prices)
    prices = sorted(prices) # get the lowest prices first for a greedy algorithm

    # if buying the item does not take our cash below 0, buy it
    for x in xrange(length):
        if cash - prices[x] >= 0:
            result += 1
            cash -= prices[x]

    return result

result = max_toys(testAA, testAB)
print result
