class PriorityQueue(object):
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

    def insert(self, v):
        self.size = self.size + 1

        self.heap[self.size] = v
        self.sink(self.size)

    def removeMax(self):
        m = self.heap[1]
        self.size = self.size - 1

        self.exchange(1, self.size)
        self.heap[self.size + 1] = None
        self.sink(1)

    def size(self):
        return self.size

    def isEmpty(self):
        return self.size is 0

    def isLess(self, x, y):
        return self.heap[x] < self.heap[y]

    def exchange(self, x, y):
        t = self.heap[x]
        self.heap[x] = self.heap[y]
        self.heap[y] = t
