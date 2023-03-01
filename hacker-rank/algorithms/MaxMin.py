"""
* Max Min (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/angry-children
"""

testA = '10 100 300 200 1000 20 30'
testA1 = 3
testB = '1 2 3 4 10 20 30 40 100 200'
testB1 = 4
testC = '10 20 30 100 101 102'
testC1 = 3

def findMaxMin(size, test):
    case = test
    case = map(int, case.split(' '))
    case = sorted(case)
    length = len(case)
    subarrays = []
    maxmin = None

    # create subgroups of length 'size'
    for x in xrange(length):
        sub = [case[x]]
        for y in xrange(1, size):
            if x + y < length: sub.append(case[x + y])

        if len(sub) == size: subarrays.append(sub)

    for z in xrange(len(subarrays)):
        operation = max(subarrays[z]) - min(subarrays[z])

        if operation < maxmin or maxmin is None: maxmin = operation

    return maxmin

result = findMaxMin(testC1, testC)
print result
