/*
 * A straightfoward implementation of a classic Singly Linked List data
 * structure in JavaScript.
 *
 * www.softwareontheshore.com
 */

/* an instance of the node object. Holds data and the pointer to the next node */
function Node(data) {
  this.data = data;
  this.next = null;
}

/* an instance of the Linked List. Tracks the length and the beginning of the list */
function LinkedList() {
  this._length = 0;
  this.head = null;
}

/* prototype method that allows for a value to be added to the list */
LinkedList.prototype.add = function add(value) {
  var node = new Node(value);
  var currentNode = this.head; // start at the beginning

  // handle an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // handle non-empty list by reaching the current end of the list
  while (currentNode.next) { currentNode = currentNode.next; }

  currentNode.next = node; // add the node to the end
  this._length++;

  return node;
}

/* prototype method that searches for the position of a value in the list.
 * returns -1 if not found or position if found.
 */
LinkedList.prototype.position = function position(value) {
  var currentNode = this.head;
  var length = this._length;
  var position = 0;

  if (length === 0) return -1;

  // run through the list and look for the value
  while (position < length) {
    if (currentNode.data === value) return position;
    currentNode = currentNode.next;
    position++;
  }

  return -1;
}

/* prototype method that returns the node at specific postion
 * returns an -1 if invalid position
 */
LinkedList.prototype.find = function find(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 0;

  // handle invalid position
  if (length === 0 || position < 0 || position > length) return -1;

  // move through list to position and return node
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
}

/* prototype method that removes the node at specific position or
 * returns -1 if invalid position or the node at that position.
 */
LinkedList.prototype.remove = function remove(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 0;
  var previousNode = null;
  var deletedNode = null;

  if (position < 0 || position > length || length === 0) return -1;

  // handle the head being removed
  if (position === 0) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }

  //handle any other node being removed
  while (count < position) {
    previousNode = currentNode; // track the node before the one to be deleted
    currentNode = currentNode.next;
    count++;
  }

  previousNode.next = currentNode.next;
  deletedNode = currentNode;
  currentNode = null;
  this._length--;

  return deletedNode;
}

/* prototype method that uses merge sort to sort the Linked
 * List
 */
LinkedList.prototype.sort = function sort() {
  function merge(left, right) {
    var merged = new LinkedList();

    while (left._length && right._length) {
      if (left.find(0).data < right.find(0).data) merged.add(left.remove(0).data);
      else merged.add(right.remove(0).data)
    }

    while (left._length) { merged.add(left.remove(0).data); }
    while (right._length) { merged.add(right.remove(0).data); }

    return merged;
  }

  var length = this._length;
  if (length < 2) return this;

  var current = this.head;
  var left = new LinkedList();
  var right = new LinkedList();

  var pivot = length / 2 | 0;
  var count = 0;

  while (count < pivot) {
    if (current) {
      left.add(current.data);
      current = current.next;
    }

    count++;
  }

  while (count < length) {
    if (current) {
      right.add(current.data);
      current = current.next;
    }

    count++;
  }

  return merge(left.sort(), right.sort());
}

var list = new LinkedList()
list.add(5);
list.add(1233)
list.add(6);
list.add(123);

console.log(list.sort())
