"""
 * HackerRank Algorithm Problem Lisa's Workbook (JavaScript)
 * https://www.hackerrank.com/challenges/bear-and-workbook
 *
 * michael@softwareontheshore.com
 """
testLineA = '5 3'
testLineB = '4 2 6 1 10'

def findSpecial(lineA, lineB):
    aArray = map(int, lineA.split(' '))
    bArray = map(int, lineB.split(' '))

    pageMax = aArray[1]
    chapterProblems = bArray
    workbook = []
    pages = 0
    specials = 0

    for x in chapterProblems:
        page = []

        for y in range(1, x + 1, 1):
            page.append(y)

            if y % pageMax == 0:
                workbook.append(page)
                pages += 1
                page = []

                if pages in workbook[pages - 1]:
                    specials += 1
            elif x == y:
                workbook.append(page)
                pages += 1

                if pages in workbook[pages - 1]:
                    specials += 1

    return specials

result = findSpecial(testLineA, testLineB)
print result
