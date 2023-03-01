"""
* Make It Anagram (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/make-it-anagram
"""
from collections import Counter

testAA = 'cde'
testAB = 'abc'

# use the Counter package to rapidly count the number of letters in the given strings
def findAnagramDeletions(sA, sB):
    countA = Counter(sA)
    countB = Counter(sB)

    # sum the difference between the two strings
    diffA = (countA - countB).values()
    diffB = (countB - countA).values()
    return sum(diffA + diffB)


result = findAnagramDeletions(testAA, testAB)
print result
