"""
 * A straightfoward implementation of a classic Singly Linked List data
 * structure in Python.
 *
 * www.softwareontheshore.com
"""

class Node(object):
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next

class LinkedList(object):
    def __init__(self, head = None):
        self.head = head
        self._length = 0

    def __str__(self):
        string = ''
        node = self.head

        if node is not None:
            while node.next is not None:
                string += str(node.data) + ', '
                node = node.next

            string += str(node.data)

        return string

    ## append a new node
    def add(self, data):
        new_node = Node(data)
        current_node = self.head

        if current_node is None:
            self.head = new_node
            self._length += 1
            return new_node

        while current_node.next:
            current_node = current_node.next

        current_node.next = new_node
        self._length += 1

        return new_node

    ## find position of value
    def position(self, value):
        current_node = self.head
        position = 0

        if current_node is not None:
            while current_node.next is not None:
                if current_node.data == value:
                    return position

                current_node = current_node.next
                position += 1

            if current_node.data == value:
                return position

        return -1

    ## find value at position
    def find(self, position):
        current_node = self.head
        length = self._length
        count = 0

        if position >= length or position < 0: return -1

        if current_node is not None:
            while count < position:
                current_node = current_node.next
                count += 1

            return current_node.data

        return -1

    ## remove the node at position
    def remove(self, position):
        current_node = self.head
        length = self._length
        count = 0
        previous_node = None
        deleted_node = None

        if position >= length or position < 0: return -1

        if position == 0:
            self.head = current_node.next
            deleted_node = current_node
            self._length -= 1

            return deleted_node

        if current_node is not None:
            while count < position:
                previous_node = current_node
                current_node = current_node.next
                count += 1

            previous_node.next = current_node.next
            deleted_node = current_node
            current_node = None
            self._length -= 1

            return deleted_node
