"""
* Larry's Array (Python)
* HackerRank Algorithm Challenge
* https://www.hackerrank.com/challenges/larrys-array
"""

test = [ '3', '3', '3 1 2', '4', '1 3 4 2', '5', '1 2 3 5 4' ]

def checkRobot(array):
    list = array
    length = len(list)
    inversions = 0
    result = 'NO'

    for j in range(0, length - 1):
        for k in range(j + 1, length):
            if list[j] > list[k]: inversions += 1

    if inversions % 2 == 0: result = 'YES'
    return result


def helpLarry(input):
    numTests = input[0];

    for i in range(1, len(input), 2):
        size = input[i]
        robotArray = map(int, input[i + 1].split(' '))
        result = checkRobot(robotArray);
        print result;

helpLarry(test)
