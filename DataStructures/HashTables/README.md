The Hash Table data structure is a collection that maps keys to values. A hash
function is used to compute an index which points a position in an array
where the desired value can be found. Most hash table designs allow for arbitrary
deletions and insertions in average constant time.  

In many situations, hash tables turn out to be more efficient than search trees
and are widely used in software development, especially in database indexing, caches,
and sets.  

### Advantages
 * Speed, particularly when the size of the data is known in advance.

### Disadvantages
  * The cost of the hash function can be higher than a search tree, especially on small sets.
  * Hash tables become quite inefficient when there are many collisions.

### Analysis
  * Insert: O(1)
  * Remove: O(1)
  * Search: O(1)

### Helpful Links
 * [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
 * [Cornell - CS312](http://www.cs.cornell.edu/courses/cs312/2008sp/lectures/lec20.html)
 * [Will Villanueva - JavaScript Hash Tables](http://www.willvillanueva.com/javascript-hash-tables/)
