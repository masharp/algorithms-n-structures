The Linked List data structure is made up of multiple nodes, each with two
portions: the data and the pointer. The data contains one instance of the
data to be stored, while the pointer stores the location of another node in the
list.  

### Advantages
  * Dynamic growth and memory usage during program runtime
  * Insertion and deletion are easily implemented
  * Linear structures such as stacks and queues are easily executed
  * Can reduce access time and may expand in real time without memory overhead

### Disadvantages
  * Uses more memory than arrays because of the storage of pointers
  * Nodes must be read in order
  * Nodes are not stored contiguously, greatly increasing time required to access individual elements
  * Reading a Linked List backwards causes issues

### Analysis
  * Indexing: O(n)
  * Shift: O(1)
  * Push: O(n) when end unknown, O(1) when known
  * Insert: O(1) + Search Time
  * Average Wasted Space: O(n)

### Helpful Links
 * [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
 * [TutsPlus - JavaScript](http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392)
