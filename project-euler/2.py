"""
* Python Solution to ProjectEuler's Problem #2
* https://projecteuler.net/problem=2
*
* Useful Resource: www.mathblog.dk
"""

testA = 10 # 10
testB = 100 # 44

def sumEvenFibo(n):
    result = 0

    ## begin fibonacci sequence
    a = 0
    b = 1

    ## compute fibonacci sequence up to n
    while (b < n):
        a, b = b, a + b

        if (a < b and a % 2 == 0): result += a ## if a is even, add to sum

    return result




print sumEvenFibo(testB)
