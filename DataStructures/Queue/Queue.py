"""
 * Queue Data Structure written in Python
"""

class Node(object):
    def __init__(self, data = None):
        self.data = data
        self.next = None

class Queue(object):
    def __init__(self, front = None):
        self.length = 0
        self.front = front

    def enqueue(self, data):
        node = Node(data)
        current = self.front

        if current is None:
            self.front = node
        else:
            while current.next is not None:
                current = current.next

            current.next = node

        self.length += 1
        return node.data

    def dequeue(self):
        current = self.front

        if self.length < 1: raise TypeError('Emptry Queue')

        self.front = current.next
        self.length -= 1;

        return current.data

    def peek(self):
        return self.front.data
