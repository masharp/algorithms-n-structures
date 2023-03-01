# A recursive function that finds the factorial of a number (N!)

def factorial(n):
    if n == 1: return 1

    return n * factorial(n - 1)
