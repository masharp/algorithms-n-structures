"""
 * Grading Students (Python)
 * HackerRank Algorithm Challenge
 * https://www.hackerrank.com/challenges/grading
 *
 * michael@softwareontheshore.com
 *
 * For each grade of the n grades, print the rounded grade on a new line.
 """

testA = [73, 67, 38, 33] ## 75, 67, 40, 33

def roundGrades(arr):
    results = []

    for x in arr:
        modulo_5 = x % 5

        if (modulo_5 >= 3 and x >= 38):
            results.append(x + (5 - (modulo_5)))
        else:
            results.append(x)

    return "\n".join(map(str, results))

print roundGrades(testA)
