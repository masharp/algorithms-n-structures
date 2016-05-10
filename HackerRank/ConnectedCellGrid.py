"""
* Connected Cell in a Grid (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/connected-cell-in-a-grid
*
* michael@softwareontheshore.com
*
* TODO: Recursively call DFS on each possible element, checking it's neighbors
*       and adding together the connections
"""
testA = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]]

# DFS Search of the Matrix
def depthSearch(visitTracker, matrix, i, j, lenX, lenY):
    total = 1

# Solve with a DFS to group connected cells
# The group with the largest collection of elements
def findLargestRegion(test):
    result = 0
    lenX = len(testA[0])
    lenY = len(test)

    matrix = test
    # started with tracking if the element has been visited
    visitTracker = [[False for x in xrange(lenX)] for x in xrange(lenY)]

    # visit each element and then DFS from it checking groups
    for i in xrange(lenX):
        for j in xrange(lenY):
            if not visitTracker[i][j] and matrix[i][j] == 1:
                visitTracker[i][j] = True
                regionTotal = depthSearch(visitTracker, matrix, i, j, lenX, lenY)

                if regionTotal > result: result = count

    return result

result = findLargestRegion(testA):

print result
