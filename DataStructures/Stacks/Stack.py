class Node(object):
    def __init__(self, data = None, previous = None):
        self.data = data
        self.previous = previous

class Stack(object):
    def __init__(self):
        self.top = None
        self.size = 0

    def push(self, data):
        node = Node(data)
        node.previous = self.top
        self.top = node
        self.size += 1

        return self.top

    def pop(self):
        current = self.top

        self.top = self.top.previous
        self.size -= 1

        return current.data
