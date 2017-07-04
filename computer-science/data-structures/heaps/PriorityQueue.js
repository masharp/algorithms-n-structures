/**
 * JavaScript Custom Implementation of a Priority Queue data structure
 *
 * michael@softwareontheshore.com
 */

 'use strict';

function PriorityQueue() {
    this.heap = [];
    this.N = 0;
}

PriorityQueue.prototype.size = function() {
    return this.N;
}

PriorityQueue.prototype.isEmpty = function() {
    return this.N === 0;
}

PriorityQueue.prototype.insert = function(v) {
    this.heap[++this.N] = v;
    this.swim(this.N);
}

PriorityQueue.prototype.removeMax = function() {
    const max = this.heap[1];

    this.exchange(1, this.N--);
    this.heap[this.N + 1] = null;

    this.sink(1);

    return max;
}

/* restore the heap order when a new node is added at the bottom or a node's priority
* has increased (bottom-up restore)
*/
PriorityQueue.prototype.swim = function(k) {

    /* compare child node to parent and exchange if necessary */
    while (k > 1 && this.isLess(k / 2, k)) {
        this.exchange(k / 2, k);
    }
}

/* restore the heap order when a node's priority has decreased, such as when
 * the root is exchanged with a smaller key (top-down restore)
 */
PriorityQueue.prototype.sink = function(k) {

    /* compare parent node with two children and exchange if necessary */
    while (2 * k <= this.N) {
        const j = 2 * k;

        if (j < this.N && this.isLess(j, j + 1)) { j++; }
        if (!this.isLess(k, j)) { break; }

        this.exchange(k, j);
        k = j;
    }
}

/* compare two nodes to determine if x is less than y */
PriorityQueue.prototype.isLess = function(x, y) {
    return this.heap[x] < this.heap[y];
}

/* exchange the values of two nodes to restore heap order */
PriorityQueue.prototype.exchange = function(x, y) {
    const node = this.heap[x];

    this.heap[x] = this.heap[y];
    this.heap[y] = node;
}

const pq = new PriorityQueue();

pq.insert(10);
pq.insert(11);
pq.insert(12);
pq.insert(13);

console.log(pq.heap);
