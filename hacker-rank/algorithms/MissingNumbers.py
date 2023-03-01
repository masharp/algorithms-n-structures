"""
* Missing Numbers (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/missing-numbers
"""
from collections import Counter
testAA = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
testAB = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]

def findMissingNumbers(listA, listB):
    countA = Counter(listA)
    countB = Counter(listB)
    missing = []

    for x in countB:
        if x not in countA or countA[x] != countB[x]:
            missing.append(x)

    return missing
result = findMissingNumbers(testAA, testAB)
print result
