"""
 * Palindrome Index (Python)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/palindrome-index
 *
 * NOTE: Currently passes half of test cases. Times out on large cases
"""
testA = 'aaab';
testB = 'baa';
testC = 'aaa';
testD = 'hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh';
testQ = 'abcdefg';

def checkPalindrome(str):
    for x in xrange(0, len(str)):
        if str[x] != str[(len(str) - 1) - x] and x != (len(str) / 2) - 1: return False

    return True;

def findPalindromeIndex(input):
    if checkPalindrome(input): return -1

    for x in xrange(0, len(input)):
        text = input[:]
        text = text[:x] + text[x + 1:]

        if checkPalindrome(text): return x

result = findPalindromeIndex(testD)
print result
