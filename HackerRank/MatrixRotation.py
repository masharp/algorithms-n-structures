"""
* Matrix Rotation (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/matrix-rotation-algo
*
* michael@softwareontheshore.com
*
* Currently rotates the columns by 90 degrees.
* Need to work on rotating by index
"""

testACases = [4, 4, 1]
testA = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

testBCases = [4, 4, 2]
testB = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

testCCases = [5, 4, 7]
testC = [[1, 2, 3, 4], [7, 8, 9, 10], [13, 14, 15, 16], [19, 20, 21, 22], [25, 26, 27, 28]]

testDCases = [2, 2, 3]
testD = [[1, 1], [1, 1]]

def rotate(array):
    result = []
    length = len(array)

    for x in range(length):
        row = []

        for y in range(length):
            row.append(array[y][length - x - 1])

        result.append(row)

    return result

def counterRotateMatrix(array, rotations = 1):
    rotatedMatrix = array

    for x in range(rotations):
        rotatedOnce = rotate(rotatedMatrix)
        rotatedMatrix = rotatedOnce

    return rotatedMatrix


result = counterRotateMatrix(testA, testACases[2])
print result
