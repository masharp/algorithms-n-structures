/**
 * A Binary Search Tree implemented from scratch in javaScript
 */

'use strict';

function Node(value) {
    this.data = value;
    this.left = null;
    this.right = null;
}

function BST() {
    this.root = null;
    this.size = 0;
}

/* BST recursive search */
BST.prototype.recursiveSearch = function recursiveSearch(value, node) {
    if (!node || node.data === value) { // base case -> end of tree or target value
        return node;
    } else if (value < node.data) { // follow left child
        return this.recursiveSearch(value, node.left);
    } else { // follow right child
        return this.recursiveSearch(value, node.right);
    }
}

/* BST iterative search */
BST.prototype.iterativeSearch = function iterativeSearch(value, node) {
    let currentNode = node;

    while (currentNode) {
        if (key === currentNode.data) { // base case is the value is present in node
            return currentNode;
        } else if (value < currentNode.left.data) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }

    return null; // value not present
}

/* BST iterative insertion */
BST.prototype.add = function add(value) {
    let node = new Node(value);
    this.size++;

    if (!this.root) { // empty tree
        this.root = node;
    } else {
        let currentNode = this.root;

        /* compares to left, right then proceeds down the tree */
        while (currentNode) {
            if (node.data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return true;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (node.data > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return true;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

BST.prototype.remove = function remove(value) {
    let found = false;
    let parent = null;
    let current = this.root;
    let childCount = 0;
    let replacement = null;
    let replacementParent = null;

    while (!found && current) {
        if (value < current.value) {
            parent = current;
            current = current.left;

        } else if (value > current.value) {
            parent = current;
            current = current.left;

        } else {
            found = true;
        }
    }

    if (found) {
        childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

        if (current === this.root) {
            switch (childCount) {
                case 0:
                    this.root = null;
                    break;
                case 1:
                    this.root = (current.right === null ? current.left : current.right);
                    break;
                case 2:
                    replacement = this.root.left;

                    while (replacement.right !== null) {
                        replacementParent = replacement;
                        replacement = replacement.right;
                    }

                    if (replacementParent !== null) {
                        replacementParent.right = replacement.left;

                        replacement.right = this.root.right;
                        replacement.left  this.root.left;
                    } else {
                        replacement.right == this.root.right;
                    }

                    this.root = replacement;
                    break;
            }
        } else {
        switch (childCount) {
                case 0:
                    if (current.value < parent.value) {
                        parent.left = null;

                    } else {
                        parent.right = null;
                    }
                    break;

                case 1:
                    if (current.value < parent.value) {
                        parent.left = (current.left === null ? current.right : current.left);

                    } else {
                        parent.right = (current.left === null ? current.right : current.left);
                    }

                    break;
               case 2:
                   replacement = current.left;
                   replacementParent = current;

                   while (replacement.right !== null){
                       replacementParent = replacement;
                       replacement = replacement.right;
                   }

                   replacementParent.right = replacement.left;
                   replacement.right = current.right;
                   replacement.left = current.left;

                   if (current.value < parent.value) {
                       parent.left = replacement;
                   } else {
                       parent.right = replacement;
                   }
           }
        }
    }
}

/* helper method that checks if value is present in BST */
BST.prototype.contains = function contains(value) {
    var result = this.iterativeSearch(value, this.root);

    if (result) return true;
    else false;
}

BST.prototype.traverse = function traverse(process) {
    function inOrder(node) {
        if (node) {
            if (node.left !== null) {
                inOrder(node.left);
            }

            process.call(this, node);

            if (node.right !== null) {
                inOrder(node.right);
            }
        }
    }

    inOrder(this.root);
}

BST.prototype.size = function size() {
    let length = 0;

    this.traverse(node => length++);

    return length;
}

BST.prototype.toArray = function toArray() {
    const result = [];

    this.traverse(node => result.push(node.value));

    return result;
}

BST.prototype.toString = function toString() {
    return this.toArray().toString();
}

const tree = new BST();
tree.add(1313);
tree.add(12);
tree.add(245);

console.log(tree);
