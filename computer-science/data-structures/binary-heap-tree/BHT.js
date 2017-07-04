/**
 * A Binary Heap Tree implemented in javaScript
 * A binary tree is heap ordered if the parent node is larger or equal than the
 * subsequent child nodes. The largest node in the tree is found at the root
 *
 * michael@softwareontheshore.com
 */


/**
 * a binary heap implementation with a complete binary tree represented as an array
 * node at position k is in [k/2] and conversely the two children at position k
 * are in position [2k] and [2k + 1]
 */
function BinaryHeapTree() {
    this.heap = [];
    this.size = 0;

/* restore the heap order when a new node is added at the bottom or a node's priority
* has increased (bottom-up restore)
*/
BinaryHeapTree.prototype.swim = function(k) {

    /* compare child node to parent and exchange if necessary */
    while (k > 1 && this.isLess(k / 2 | 0, k)) {
        this.exchange(k / 2 | 0, k);
        k = k / 2 | 0;
    }
}

/* restore the heap order when a node's priority has decreased, such as when
 * the root is exchanged with a smaller key (top-down restore)
 */
BinaryHeapTree.prototype.sink = function(k) {

    /* compare parent node with two children and exchange if necessary */
    while (2 * k <= this.size) {
        let j = 2 * k;

        if (j < this.size && this.isLess(j, j + 1)) j++;
        if (!this.isLess(k, j)) break;

        this.exchange(k, j);
        k = j;
    }
}

/* compare two nodes to determine if x is less than y */
BinaryHeapTree.prototype.isLess = function(x, y) {
    return this.heap[x] < this.heap[y];
}

/* exchange the values of two nodes to restore heap order */
BinaryHeapTree.prototype.exchange = function(x, y) {
    const node = this.heap[x];

    this.heap[x] = this.heap[y];
    this.heap[y] = node;
}
