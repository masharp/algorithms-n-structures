"""
 * HackerRank Encryption Challenge (JavaScript)
 * https://www.hackerrank.com/challenges/encryption
"""
import math

test = ['feedthedog', 'haveaniceday', 'chillout']

def computeArea(length):
    row = int(math.floor(math.sqrt(length)))
    column = int(math.ceil(math.sqrt(length)))
    total = column * row
    area = { 'row': row, 'column': column, 'total': total }
    return area

def encrypt(text):
    sentence = list(text)
    length = len(text)
    area = computeArea(length)
    grid = []
    encrypted = ''

    for x in range(0, area['total'] + 1, area['column']):
        segment = sentence[x : x + area['column']]
        grid.append(segment)

    for y in range(0, area['column'], 1):
        code = ''

        for a in grid:
            try:
                if a[y]:
                    code += a[y]
            except IndexError:
                pass

        encrypted += code + ' '

    return encrypted

result = encrypt(test[0])
print result
