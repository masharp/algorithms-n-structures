"""
 * Hash Table Implemented from scratch via Python
"""

class HashTable(object):

    def __init__(self, size = 11):
        self.size = size
        self.store = [None] * self.size # a fixed length empty list

    def hash(self, key):
        hash = 0
        length = len(key)

        for x in xrange(0, length):
            hash = (hash << 5) + hash + ord(key[x])
            hash = abs(hash // 1)

        return hash % self.size

    def insert(self, key, value):
        index = self.hash(key)

        if self.store[index] is None:
            self.store[index] = [[key, value]]
        else:
            inserted = False
            length = len(self.store[index])

            for x in xrange(0, length):
                if this.store[index][x][0] == key:
                    this.store[index][x][1] = value
                    inserted = True

            if inserted is False:
                this.store[index].append([key, value]);

    def retrieve(self, key):
        index = self.hash(key)

        if self.store[index] is None:
            return None
        else:
            length = len(self.store[index])

            for x in xrange(0, length):
                if self.store[index][x][0] == key:
                    return self.store[index][x][1]

"""
 * A HashTable using Python's Standard Library dictionary [dict()]
"""
table = { '123': 'b', 'a': 123 }
table['red'] = 2

## table.clear() - remove all items
## table.copy() - return a shallow copy
## table.items() - returns key/value pairs
## table.keys() - copy of list of keys
## table.pop(key) - remove key and return value
## table.values() - copy of list of values
## len(table) - number of items in dict
