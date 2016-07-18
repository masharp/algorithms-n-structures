"""
* Python Solution to ProjectEuler's Problem #1
* https://projecteuler.net/problem=1
*
* michael@softwareontheshore.com
*
* Useful Resource: www.mathblog.dk
"""

def sumMultiples(n):
    threes = n // 3
    fives = n // 5
    fifteens = n // 15

    return (
        3 * (threes * (threes + 1) // 2) +
        5 * (fives * (fives + 1) // 2) -
        15 * (fifteens * (fifteens + 1) // 2)
    )

print sumMultiples(10 - 1)
