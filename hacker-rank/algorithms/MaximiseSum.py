"""
* Maximise Sum (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/maximise-sum
"""

testAA = '5 7'.split(' ')[1]
testAB = '3 3 9 9 5'

def maximiseSum(mod, array):
    length = len(array)

    for x in range(0, length):
        for y in range(x, length):
            print array[x:y]

testAB = map(int, testAB.split(' '))
result = maximiseSum(testAA, testAB)
