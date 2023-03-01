"""
* Gemstones (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/gem-stones
"""

test = 'abcdde\nbaccd\neeabg'

def countGemElements(gems):
    gemsList = gems.split('\n')
    gemsLength = len(gemsList)
    gemElements = 0

    # remove all duplicate characters from each gem
    for x in range(0, gemsLength):
        gemsList[x] = ''.join(set(gemsList[x]))

    for y in range(0, len(gemsList[0])):
        letter = gemsList[0][y]
        found = 1

        for z in range(1, gemsLength):
            if gemsList[z].find(letter) >= 0:
                found += 1

        if found == gemsLength: gemElements += 1

    return gemElements

result = countGemElements(test)
print result
