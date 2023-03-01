"""
* Greedy Florist (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/greedy-florist
"""
testAA = 3
testAB = 3
testAC = '2 5 6'

testBA = 2
testBB = 3
testBC = '2 5 6'

def maximizeFlowerProfits(customers, flowers, prices):
    prices = map(int, prices.split(' '))
    prices = sorted(prices) # sort prices so the cheapest come first
    
result = maximizeFlowerProfits(testAA, testAB, testAC)
print result
