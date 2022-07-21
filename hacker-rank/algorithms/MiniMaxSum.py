"""
 * Mini-Max Sum (Python)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/mini-max-sum
 *
 * michael@softwareontheshore.com
 *
 * The goal is to find the minimum sum and the maximum sum of 5 numbers by only using 4.
 """

##arr = map(int, raw_input().strip().split(' '))

testA = [1, 2, 3, 4, 5] ##10 14
testB = [2, 5, 1, 3, 4] ##10 14
testC = [6, 5, 9, 29, 2] ## 49 22

def sumMiniMax(arr):

    maximum = sum(sorted(arr)[1:5])
    minimum = sum(sorted(arr)[0:4])

    return str(minimum) + ' ' + str(maximum)

print sumMiniMax(testC)
