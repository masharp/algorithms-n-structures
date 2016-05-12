"""
* Sherlock and Valid Strings (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/sherlock-and-valid-string
*
* michael@softwareontheshore.com
"""
from collections import Counter

testA = 'aabbcd'

def testValidString(test):
    count = Counter(test)
    uneven = 0
    target = count.most_common()[0][1] # get the highest occuring number
    result = 'YES'

    for x in count:
        if count[x] != target: uneven += 1

    if uneven > 1: result = 'NO'
    return result

result = testValidString(testA)
print result
