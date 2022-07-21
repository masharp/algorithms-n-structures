## My solution to the Candies HackerRank Algorithm Challenge (Dynamic Programming)
## https://www.hackerrank.com/challenges/candies
##
## michael@softwareontheshore.com

# test cases
kidsA = [1, 2, 2]
kidsB = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]

def distributeCandies(kids):
    # check for a class of 1 or zero
    l = len(kids)
    if l <= 1: return l

    # give each student 1 candy to begin
    k = kids
    candies = [1 for i in range(l)]

    # first cycle through array from front to end checking upward trends
    for x in range(1, l):
        if k[x] > k[x - 1]:
            # if the previous student has less points than current, give current
            # the previous' candies + 1
            candies[x] = candies[x - 1] + 1

    # then cycle through array from end to front checking downward trends
    for y in range(l - 1, 0, -1):
        if k[y - 1] > k[y]:
            # assign candies based on the higher value, the next's current or
            # it's current candies + 1
            candies[y - 1] = max(candies[y] + 1, candies[y - 1])

    print candies
    return sum(candies)

print distributeCandies(kidsB)
