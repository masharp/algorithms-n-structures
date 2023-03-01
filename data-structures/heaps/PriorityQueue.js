/**
 * JavaScript Custom Implementation of a Priority Queue data structure
 */

 'use strict';

function PriorityQueue() {
    this.heap = [];
    this.size = 0;
}

PriorityQueue.prototype.sort = function() {
    
}

PriorityQueue.prototype.size = function() {
    return this.size;
}

PriorityQueue.prototype.isEmpty = function() {
    return this.size === 0;
}

PriorityQueue.prototype.insert = function(v) {
    this.heap[++this.size] = v;
    this.swim(this.size);
}

PriorityQueue.prototype.removeMax = function() {
    const max = this.heap[1];

    this.exchange(1, this.size--);
    this.heap[this.size + 1] = null;
    this.sink(1);

    return max;
}

/* restore the heap order when a new node is added at the bottom or a node's priority
* has increased (bottom-up restore). uses bitwise rounding
*/
PriorityQueue.prototype.swim = function(k) {

    /* compare child node to parent and exchange if necessary */
    while (k > 1 && this.isLess(k / 2 | 0, k)) {
        this.exchange(k / 2 | 0, k);
        k = k / 2 | 0;
    }
}

/* restore the heap order when a node's priority has decreased, such as when
 * the root is exchanged with a smaller key (top-down restore)
 */
PriorityQueue.prototype.sink = function(k) {

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
PriorityQueue.prototype.isLess = function(x, y) {
    return this.heap[x] <= this.heap[y];
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
pq.insert(9);
pq.insert(16);
pq.insert(29);
pq.insert(1002);

console.log(pq.heap);
console.log(pq.removeMax())
console.log(pq.heap);
