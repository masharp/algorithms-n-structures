/**
 * JavaScript Custom Implementation of a Stack data structure
 *
 * michael@softwareontheshore.com
 */


function Node(num) {
 this.num = num;
 this.previous = null;
}

function Stack() {
  this.top = null;
  this.size = 0;
}

Stack.prototype.push = function(num) {
  var node = new Node(num);

  node.previous = this.top;
  this.top = node;
  this.size++;

  return this.top;
}

Stack.prototype.pop = function() {
  var current = this.top;

  this.top = this.top.previous;
  this.size--;

  return current.num;
}

Stack.prototype.peek = function() {
  return this.top;
}
