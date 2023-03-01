"""
My solution to CodeEval's First Non-Repeated Character Algorithm Challange (Moderate)
https://www.codeeval.com/open_challenges/12/
"""

import sys
import collections

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        test = test.strip()

        ## count the number of appearences of each char using Counter to find
        ## the non-repeated characters
        c = collections.Counter(test)
        r = None

        ## cycle through the counter for non-repeated chars and then check
        ## the position within the string to find the first
        for x in c:
            f = test.find(x)
            if (f < r or r is None) and c[x] is 1:
                r = f

        print test[r]
