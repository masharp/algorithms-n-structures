
/**
 * Queue Data Structure written in JavaScript
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.front = null;
  this.length = 0;
}

Queue.prototype.enqueue = function enqueue(data) {
  var node = new Node(data);
  var current = this.front;

  if (!current) this.front = node;
  else {
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  this.length++;
  return node;
}

Queue.prototype.dequeue = function dequeue() {
  var current = this.front;

  if (this.length < 1) throw new TypeError('Emptry Queue');

  this.front = current.next;
  this.length--;

  return current;
}

Queue.prototype.peek = function peek() {
  return this.front;
}
