"""
* Pangrams (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/pangrams
*
* michael@softewareontheshore.com
"""

testA = 'We promptly judged antique ivory buckles for the next prize'
testB = 'We promptly judged antique ivory buckles for the prize'

def testPangram(sentence):
    sentence = sentence.lower()
    # ascii numeric representation of lower case alphabet
    asciiList = range(97, 123)

    for x in range(len(sentence)):
        letter = ord(sentence[x])

        if letter in asciiList:
            asciiList.remove(letter)

    if len(asciiList) == 0: return 'pangram'
    return 'not pangram'

result = testPangram(testB)
print result
