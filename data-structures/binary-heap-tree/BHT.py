"""
 * A Binary Heap Tree implemented from scratch in Python.
 * Represented as an array.
"""

class BHT(object):
    def __init__(self, heap = [], size = 0):
        self.heap = heap
        self.size = size

    def swim(self, k):

        while (k > 1 and self.isLess(int(k / 2))):
            self.exchange(int(k / 2), k)
            k = int(k / 2)

    def sink(self, k):
        while (2 * k <= self.size):
            j = k * 2

            if (j < self.size and self.isLess(j, j + 1)): j = j + 1
            if (self.isLess(k, j) is False): break

            self.exchange(k, j)
            k = j

    def isLess(self, x, y):
        return self.heap[x] < self.heap[y]

    def exchange(self, x, y):
        t = self.heap[x]
        self.heap[x] = self.heap[y]
        self.heap[y] = t
