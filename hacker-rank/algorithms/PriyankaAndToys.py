"""
* Priyanka and Toys (Python)
* HackerRank Algorithm Challegen
* https://www.hackerrank.com/challenges/priyanka-and-toys
"""

testA = '1 2 3 17 10'

def findToyUnits(toys):
    toys = map(int, toys.split(' '))
    toys = sorted(toys)
    length = len(toys)
    units = 1
    currentWeight = toys[0] + 4

    for x in xrange(1, length):
        if toys[x] <= currentWeight:
            pass
        else:
            units += 1
            currentWeight = toys[x] + 4

    return units

result = findToyUnits(testA)
print result
