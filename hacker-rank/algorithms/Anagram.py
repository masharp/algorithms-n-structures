"""
* Anagram (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/anagram
"""

testA = 'aaabbb'
testAA = 'ab'
testB = 'abc'
testC = 'mnop'
testD = 'xyyx'
testE = 'xaxbbbxx'

def testAnagram(input):
    length = len(input)
    textA = input[0: length / 2]
    textB = input[length / 2:]
    operations = 0

    if length % 2 != 0: return -1 # uneven strings cannot be anagrams

    # takes each character, removes it from the first string and checks if it
    # is present in the second string. if so, remove it from the second string
    # to control duplicate characters. if not found, then that means we need to
    # replace it
    while len(textA) > 0:
        a = textA[0]
        b = textB.find(a)
        textA = textA[1::]

        if b < 0:
            operations += 1
        else:
            textB = textB[:b] + textB[(b + 1):]

    return operations

result = testAnagram(testE)
print result
