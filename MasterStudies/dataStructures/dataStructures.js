(function() {
  var app = angular.module("studyGuide", []);
  app.controller("StudyController", function() {
    this.structures =  structures;
  });
  var structures = [
    {
      title: "Arrays",
      descriptions: [
        "An array is a sequence of elements of the same data type, each identified by	an index value. The length and memory allocation of the array is fixed and set at initialization. Sometimes referred to as 'tables' or 'vectors,' they are often used as the basis for lists and string. They are useful because the element indices can be computed at run time.",
      ],
      advantages: [
        "Simplistic data representation",
        "Memory is contiguous",
        "Can jump to specific array index",
        "Used to implement other data structures",
        "Can represent a matrix"
      ],
      disadvantages: [
        "Size is immutable and must be set an initialization",
        "Because memory size is static, can lead to wasted memory or errors",
        "Inefficient for searching, sorting and deletion",
      ],
      types: [
        "One-Dimensional: Linear array of fixed elements",
        "Two-Dimensional (Matrix): a collection of linear rows and columns"
      ],
      efficiency: [
        "Indexing: Θ(1)",
        "Searching: Θ(n)",
        "Optimal Search: Θ(log n)",
        "Insert: N/A",
        "Wasted Space: 0"
      ],
      apis: [
        "Java: Array ( new [int] )"
      ],
      code: []
    },
    {
      title: "Priority Queues",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "B-Trees",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Binomial Heaps",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Fibonacci Heaps",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Red-Black Trees",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Splay Trees",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Skip Lists",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Tries",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "AVL Trees",
      descriptions: [
        ""
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },

    {
      title: "Binary Trees",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },

    {
      title: "Dynamic Arrays",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },

    {
      title: "Linked Lists",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },

    {
      title: "Stacks",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },

    {
      title: "Dictionaries",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },

    {
      title: "Hash Tables",
      descriptions: [
        "",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "StringBuilder",
      descriptions: [
        "A container similar to a standard String, but is given a mutable block of memory to work with that changes in size with the contents of the StringBuilder. It is useful if you are making a lot of changes to the string over time.",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
    {
      title: "Hash Code (Characteristic)",
      descriptions: [
        "An implicitly assigned identifier given to individual classes and their unique objects. Allows the manipulation of these classes and objects into data structures.",
      ],
      advantages: [
        "",
      ],
      disadvantages: [
        "",
      ],
      types: [

      ],
      apis: [

      ],
      code: [
        "",
        ""
      ]
    },
  ];
})();

/*
- Dynamic Array (Data Structure):
- A variable-size list that allows elements to be added or removed. This is usually 		done by creating a fixed-size array in memory with two parts, the data and the 			second which stores the capacity, or the maximum size before the data will need 		memory relocating. Also known as mutable array, dynamic table, or array list.
Advantages:
- Similar to arrays; locality of references, data cache use, random access
- Cache friendly
- Faster access due to locality of memory reference.
Disadvantages:
- Insertion and deletion is slow because all following items must be shifted
- In highly fragmented memory, it may be difficult to find a contiguous 				memory segment to store the array
Efficiency:
- Indexing: Θ(log n)
- Insert/Delete (beginning): Θ(log n)
- Insert/Delete (end): Θ(log n)
- Insert/Delete (middle): Θ(log n)
- Wasted Space (average): Θ(n)
Common Uses:
-Situations where you require an array, but need the array's length to be 				mutable
APIs:
- Java: ArrayList


- LinkedList (Data Structure):
- A LinkedList is a list of nodes that together represent a sequence. Each node is 		composed of data and a reference to the next node in the list. The head of the 			list is the beginning, and the tail is the end, usually a null value. This structure 			allows for efficient insertion or removal of elements from any position in the 			sequence, without restructuring of the data.
Advantages:
- Use dynamic memory allocation at runtime.
- Insertion and deletion of nodes is easily implemented.
- Linear data structures, such as stacks and queues are easily 						implemented.
- Can reduce access time and may expand in real time without memory 					overhead.
Disadvantages:
- Tendency to use more memory due to pointers requiring extra storage 				space.
- Nodes must be read sequentially
- Nodes are stored incontiguously, greatly increasing single element 				access time
- Singly-linked lists are difficult to navigate through reversely, and double-				linked 	allocate more memory due to back pointer.
Types:
- Singly Linked: data + next node in each
- Doubly Linked: last node + data + next node in each
- Multiply Linked: data + two or more links (which reference same data in 				different order)
- Circular Linked: singly linked + last node reference to first node
- Sentinel Nodes: dummy node before first and after last nodes to ensure 			dereferencing even empty lists
- Hash Linking: store the link nodes in an array outside of the data array
Efficiency:
- Indexing: Θ(n)
- Insert/Delete (beginning): Θ(1)
- Insert/Delete (end): Θ(n) when unknown, Θ(1) when known
- Insert/Delete (middle): search time + Θ(1)
- Wasted Space (average): Θ(n)
Common Uses:
- Insertion /  Deletion Operations
- Dynamic Memory Allocation
- Representing Polynomials
- Symbol Tables
- Representing Sparse Matrix
Implementation:
- LinkedLists GitHub (Java)
APIs:
- Java: LinkedList


- Stack (Data Structure):
-  A stack is generally implemented on top of another data structure (usually a 			LinkedList), but are a “last in-first out” structure. They are made with the 				LinkedList  head being the only place for insertion and removal (push / pop). It is 		often a recursive data structure featuring a top and the rest of the stack.
Advantages:
Disadvantages:
Efficiency:
Common Uses:
- Reversing the letters of a word or String.
- Undoing the last action (keeping all text changes in a stack)
- Backtracking
APIs:
- Java: Stack (built upon a Vector)
Implementation:
- Queue (Data Structure):
-  A queue is similar to a stack, but is a container implemented on top of another 		data structure (usually a LinkedList) that follows the “first in-first out” principle. 			Data is inserted at the end of the structure (enqueue) and removed from 				the front of the structure (dequeue). This is often done with a circular LinkedList, 		or in another structure where the front and end are recorded,
Advantages:
Disadvantages:
Efficiency:
Common Uses:
- Processes that evaluate data or things on a first come-first serve basis.
APIs:
- Java: Queue(new LinkedList)
Implementation:

- Hash Table (Data Structure):
-  A hash table or hash map is a collection of key-valued pairs in an associative 			array. It uses a hash function to compute and index into an array of buckets or 			slots from which the correct value can be found. A hash function accepts the key 		and returns the data unique to that key. It is typically more efficient than search 			trees and other data structures that require a table lookup structure.
Advantages:
- Efficient search, insertion, deletion
Disadvantages:
- Hash collision: when a hash function returns the same data for two 				unique keys
Efficiency:
- Indexing: Θ(1)
- Search Θ(1)
- Insertion: Θ(1)
Common Uses:
- Associative arrays
- Database indexing
APIs:

- Binary Tree (Data Structure):
-  A tree data structure in which each node has at most two children which are 			referred to as the left child and right child. It is generally used for efficient 				searching and sorting. A Binary Search Tree is simply a binary tree with it's 			keys kept in sorted order, so that lookups can easily use the principles of binary 			search. This is done using comparable keys to assign the direction of the child 			nodes. A left child has a key smaller than the parent, a right child has a key 			greater than the parent. In a binary search tree, there can be no duplicate node. 		Because of this it is more likely to be used as a data structure than a simple 			binary tree.
Advantages:
- Designed to optimize searching and sorting
- They are comparatively simple implement than other data structures
Disadvantages:
- A “degenerate tree” is an unbalanced tree, which if entirely one-sided is 				essentially a LinkedList
Efficiency:
- Indexing (BST): Θ(log n)
- Search (BST): Θ(log n)
- Insertion (BST): Θ(log n)
Common Uses:
APIs:
Implementation:
- Trees GitHub (Java)


- AVL Tree (Data Structure):
-  An AVL tree is a self-balancing binary search tree. In this type of tree, the 			heights of the two child subtrees of any node differ by at most one; if at any time 		they differ by more than one, automatic balancing is done to restore this 				property. This balancing is done by a factor (height(left subtree) – height(right 			subtree)).
Advantages:
Disadvantages:
Efficiency:
Common Uses:
APIs:
Implementation:
*/
