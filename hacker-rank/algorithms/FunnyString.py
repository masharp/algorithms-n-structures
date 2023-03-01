"""
* Funny String (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/funny-string
"""
testA = 'acxz'
testB = 'bcxz'


def findFunnyString(input):
    textS= input
    textR = input[::-1]
    length = len(textS)

    # takes the ASCII value of each character combination in each string and checks
    # the absolute difference. To fit the challenge, each comination must have the same
    # difference
    for x in range(0, length):
        if x + 1 != length:
            s = abs(ord(textS[x + 1]) - ord(textS[x]))
            r = abs(ord(textR[x + 1]) - ord(textR[x]))

            if s != r: return 'Not Funny'

    return 'Funny'


result = findFunnyString(testB)
print result
