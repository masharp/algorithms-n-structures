"""
* Sherlock and Anagrams
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/sherlock-and-anagrams
"""

testA = 'abba' # 4
testB = 'abcd' # 0
testC = 'ifailuhkqq' # 3
testD = 'hucpoltgty' # 2
testE = 'ovarjsnrbf' # 2
testF = 'pvmupwjjjf' # 6
testG = 'iwwhrlkpek' # 3

def parseAnagramPairs(input):
    length = len(input)
    pairs = 0

    # for each substring in the string
    for x in range(1, length):
        tracker = {}

        # count the number of possible substrings in the string
        for y in range(length - x + 1):
            substring = list(input[y: y + x]) # create a list to sort
            substring.sort() # sort the substring to compare letter combinations
            text = ''.join(substring) # join the list back into a string

            if text in tracker:
                tracker[text] += 1
            else:
                tracker[text] = 1
            pairs += tracker[text] - 1 # the dictionary will reflect a pair if the value is 2, so we increment the pairs
    return pairs

result = parseAnagramPairs(testG)
print result
