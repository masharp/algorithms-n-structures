"""
 * Palindrome Index (Python)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/two-strings
 *
 * michael@softwareontheshore.com
 *
 """

testA = 'hello\nworld'
testB = 'hi\nworld'

def testTwoStrings(input):
    input = input.split('\n')
    textA = input[0]
    textB = input[1]

    # remove duplicates
    textA = ''.join(set(textA))
    textB = ''.join(set(textB))

    for char in textA:
        if char in textB: return 'YES'

    return 'NO'

result = testTwoStrings(testB)
print result
