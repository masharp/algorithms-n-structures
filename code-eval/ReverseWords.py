# Solution to Code Eval's Reverse Words Challenge, written in python
# https://www.codeeval.com/open_challenges/8/

import sys

with open(sys.argv[1], 'r') as test_cases:
    for test in test_cases:
        if test:
            s = ''

            for x in reversed(test.strip().split(' ')):
                s += x + ' '

            print s.strip();
