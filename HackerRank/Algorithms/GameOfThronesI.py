"""
* Game of Thrones - I (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/game-of-thrones
*
* michael@softwareontheshore.com
"""

testA = 'aaabbbb'
testB = 'cdefghmnopqrstuvw'
testC = 'cdcdcdcdeeeef'

def checkThronesLock(input):
    text = list(input)
    uniques = ''.join(set(text))
    count = 0

    # count the occurance of an odd character for each unique character.
    # if more than 1, cannot create a palindrome
    for char in uniques:
        if text.count(char) % 2 != 0:
            count += 1

    if count < 2: return 'YES'
    return 'NO'


result = checkThronesLock(testC)
print result
