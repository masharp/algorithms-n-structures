/**
 * A Binary Search Tree implemented from scratch in javaScript
 */

function Leaf(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
  this.size = 0;
}

/* BST recursive search */
BST.prototype.recursiveSearch = function recursiveSearch(value, leaf) {
  if (!leaf || leaf.data === value) { // base case -> end of tree or target value
    return leaf;
  } else if (value < leaf.data) { // follow left child
    return this.recursiveSearch(value, leaf.left);
  } else { // follow right child
    return this.recursiveSearch(value, leaf.right);
  }

}
/* BST iterative search */
BST.prototype.iterativeSearch = function iterativeSearch(value, leaf) {
  var currentLeaf = leaf;

  while (currentLeaf) {
    if (key === currentLeaf.data) { // base case is the value is present in leaf
      return currentLeaf;
    } else if (value < currentLeaf.left.data) {
      currentLeaf = currentLeaf.left;
    } else {
      currentLeaf = currentLeaf.right;
    }
  }

  return null; // value not present
}

/* helper method that checks if value is present in BST */
BST.prototype.contains = function contains(value) {
  var result = this.iterativeSearch(value, this.root);

  if (result) return true;
  else false;
}


/* BST iterative insertion */
BST.prototype.add = function add(value) {
  var node = new Leaf(value);
  this.size++;

  if (!this.root) { // empty tree
    this.root = node;
  } else {
    var currentLeaf = this.root;

    // compares to left, right then proceeds down the tree
    while (currentLeaf) {
      if (node.data < currentLeaf.data) {
        if (!currentLeaf.left) {
          currentLeaf.left = node;
          return true;
        } else {
          currentLeaf = currentLeaf.left;
        }
      } else if (node.data > currentLeaf.data) {
        if (!currentLeaf.right) {
          currentLeaf.right = node;
          return true;
        } else {
          currentLeaf = currentLeaf.right;
        }
      }
    }
  }
}

/* BST iterative removal
BST.prototype.remove = function remove(value) {
  var currentLeaf = this.root;

  if (!currentLeaf) return null;
  else {
    while (currentLeaf.data !== value || currentLeaf) {
      if (value < currentLeaf.left.data && currentLeaf.left) {
        currentLeaf = currentLeaf.left;
      } else if (value > currentLeaf.right.data && currentLeaf.right) {
        currentLeaf = currentLeaf.right;
      }
    }
  }
}*/

BST.prototype.size = function size() {
  return this.size;
}

/* recursive inorder (left first) tree traversal in order to build an array */
BST.prototype.toArray = function toArray() {
  var result = [];

  function traverse(leaf) {
    if (!leaf) return;

    traverse(leaf.left);
    result[result.length] = leaf.data;
    traverse(left.right);
  }

  traverse(this.root);
  return result;
}

BST.prototype.toString = function toString() {
  return this.toArray().toString();
}

var tree = new BST();
tree.add(1313);
tree.add(12);
tree.add(245);

console.log(tree);
