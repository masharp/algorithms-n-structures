(function() {
  var app = angular.module("studyGuide", []);
  app.controller("StudyController", function() {
    this.general = general;
    this.sorting = sorting;
    this.searching = searching;
  });
  var general = [
    {
      title: "Heuristics",
      content: "An approximation to something that is relavant to the problem. Heursistics are often computed by their own algorithm. These are often faster in average real-world applications. An example: in order to find the shortest path to a location, find the measured distance between the two locations."
    },
    {
      title: "Recursion",
      content: "Recursion is an algorithm that calls itself in order to solve a problem. This involves a base case, which returns a value without making any subsequent recursive calls (usually 1 or 0), and a recursive step which relates the function at one input to another input and must converge to	the base case."
    },
    {
      title: "Iteration",
      content: "Iterative algorithms are called repeatedly but for a finite amount of times,	each time being a single iteration. This is often used to move incrementally through a dataset. This is generally implemented with loops, such as for and while."
    },
    {
      title: "Average of Numbers in an Array",
      content: "-"
    },
    {
      title: "Data Structure Retrieval",
      content: "-"
    },
    {
      title: "Graphs",
      content: "-"
    },
    {
      title: "Divide and Conquer",
      content: "-"
    },
    {
      title: "Matrix Levels",
      content: "-"
    },

    {
      title: "Numerical Computation Algorithms",
      content: "-"
    },
    {
      title: "NP Problems (Non-Deterministic Polynomial)",
      content: "Also known as NP-Complete problems. These are problems that are answered by insufficiently slow algorithms. The efficient answer to the problem is unknown."
    },
    {
      title: "Automata",
      content: "Automata are abstract models of machines that perform calculations on an input by moving through a series of states or configurations. At each state, a transition function 	determines the next configuration based on a finite portion of the current configuration. 	Characteristics include inputs(sequence of symbols), outputs (sequence of symbols 	that meets conditions), and states (definition depends on automata type).      - Finite State Machine: - Pushdown Automata: - Linear-bounded Automata: - Turing Machine:"
    },
    {
      title: "Approximate Algorithms",
      content: "Acceptable algorithms that sacrifice accuracy for speed."
    },
    {
      title: "Randomized Algorithms",
      content: "These algorithms include a randomized element in some way. These often make very good average case algorithms. Ramdomized algorithms are attractively simple and often faster."
    },
    {
      title: "Compression",
      content: "Algorithms that allow an output file to contain the least amount of bytes while attaining an acceptable quality. Example: .jpg."
    },
    {
      title: "Logarithms",
      content: "This is the inverse of exponentials, which means they grow very slowly. Exponentials grow rapidly."
    },
    {
      title: "Asymptotic Analysis",
      content: "This kind of analysis is concerned with the 'rate of growth' of a function, based on the size of the inputs in an algorithm. There are three types of asymptotic analysis: Theta, O, Omega."
    },
    {
      title: "Big-Theta \u03B8",
      content: "Asymptotically tight-bound on the running time. Asymptotically because it matters for only large values of N. tight-bound because we've nailed the running time to within the contstant factor above and below."
    },
    {
      title: "Big-O",
      content: "Asymptotically upper bound. Used to express that the running time grows at most 'this much,' but it could grow more slowly. This notation bounds the growth only to a constant factor above."
    },
    {
      title: "Big-Omega \u03A9",
      content: "Asymptotically lower bound. Used to express the 'least' amount of running time. This notation bounds the growth only to a constant factor below."
    },
  ];
  var sorting = [
    {
      title: "Insertion Sort",
      descriptions: [
        "Sorts an element by checking each element in a collection and inserting the sorted value into the proper place."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        "A) Get newElement & set temp -> beginningElement",
        "B) If temp > newElement -> array[temp] + 1",
        "C) Set temp = temp +1 or -1",
        "D) Continue until temp < newElement",
        "E) newElement = array[temp] + 1"
      ],
      code: [
        "Merge Sort - GitHub",
        "https://github.com/masharp/useful-algorithms/blob/master/Sort/MergeSort.js"
      ],
      analysis: [
        "Best Case: \u0398()",
        "Average Case: \u0398(n^2)",
        "Worst Case: \u0398()"
      ]
    },
    {
      title: "Merge Sort",
      descriptions: [
        "Divide & Conquer Algorithm",
        "Merge sort is one of the most basic sorting algorithms. It is a comparison based sorting algorithm that divides the entire dataset into 	groups of, at most, two. It then compares each number one at a time,moving the smallest number to the left of the pair. Once all pairs are sorted it then compares the left most elements of the two leftmost pairs creating a sorted group of four with the smallest number on the left and the largest on the right. This process is repeated until there is only one set."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        "-"
      ],
      code: [
        "Merge Sort - JavaScript",
        "https://github.com/masharp/useful-algorithms/blob/master/Sort/MergeSort.js"
      ],
      analysis: [
        "Best Case: \u0398(n)",
        "Average Case: \u0398(n log n)",
        "Worst Case: \u0398(n log n)"
      ]
    },
    {
      title: "QuickSort",
      descriptions: [
        "Divide & Conquer Algorithm",
        "QuickSort is a comparison based sorting algorithm that divides an entire dataset in half by selecting the a pivot element (usually the farthest right) and putting all smaller elements to the left of the average. It repeats this process recursively on the two subarrays and sorts in place. While it has the same Big O as many other sorting algorithms, or worse in some cases, it is often faster in practice than many other sorting algorithms such as Merge Sort.",
        "The addition of a randomized pivot greatly decreases the probability of getting a worst case (3-1 balance). This can be done by taking the median of 3 or more randomly chosen elements."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        "Divide: Choose a pivot and arrange the elements so that all elements less than the pivot are to the left of the pivot and the larger to the right. The pivot is then placed in its place and its index returned by this step.",
        "Conquer: Recursively call the QuickSort function based on the divide step.",
        "Combine: This step does nothing, the recursive conquer step completes the algorithm."
      ],
      analysis: [
        "Best Case: \u0398(n)",
        "Average Case: \u0398(n log n)",
        "Worst Case: \u0398(n^2)"
      ],
      code: [
        "QuickSort - JavaScript",
        "https://github.com/masharp/useful-algorithms/blob/master/Sort/Quicksort.js"
      ]
    },
    {
      title: "Bubble Sort",
      descriptions: [
        "Bubble Sort is a comparison based algorithm that iterates from left to right and compares each couplet, moving the smaller element to the left. It repeats this process until it can no longer move an element to the left. While simple to implement, it is the least efficient, especially on larger datasets."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        ""
      ],
      analysis: [
        "Best Case: \u0398(n)",
        "Average Case: \u0398(n^2)",
        "Worst Case: \u0398(n^2)"
      ],
      code: [
        "Bubble Sort - JavaScript",
        "https://github.com/masharp/useful-algorithms/blob/master/Sort/BubbleSort.js"
      ]
    },
    {
      title: "Selection Sort",
      descriptions: [
        "Selection sort is a comparison based algorithm that takes each element of a dataset and compares it to the rest of the dataset in order to find a smaller element. If found, the element's positions in the dataset are swapped."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        ""
      ],
      analysis: [
        "Best Case: \u0398(n)",
        "Average Case: \u0398(n^2)",
        "Worst Case: \u0398(n^2)"
      ],
      code: [
        "Selection Sort - JavaScript",
        "https://github.com/masharp/useful-algorithms/blob/master/Sort/SelectionSort.js"
      ]
    },
  ];
  var searching = [
    {
      title: "Breadth-First Search (BFS)",
      descriptions: [
        "Tree Data Structure Searching",
        "A algorithm that searches a tree or graph by searching levels of the tree first, starting at the root. It finds every node on the same level, most often moving left to right. While doing this, it tracks the children nodes of the nodes on the current level. When finished examining a level it moves to the left-most node on the current level. The bottom right node isevaluated last (the node that is deepest and farthest right of the tree's level). A BFS is optimal for searching a tree that is wider than it is deep. Uses a queue to store information about the tree as the tree is traversed. Because the queue stores pointers, it is more memory intensive than a DFS. This search algorithm tends to use looping."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        ""
      ],
      analysis: [
        "Best Case: \u0398()",
        "Average Case: \u0398(|E|+|V|) - E is edges, V is vertices",
        "Worst Case: \u0398()"
      ],
      code: [
        "Trees - Java",
        "https://github.com/masharp/useful-algorithms/blob/master/DataStructures/Trees.java"
      ]
    },
    {
      title: "Depth-First Search (DFS)",
      descriptions: [
        "Tree Data Structure Searching",
        "An algorithm that searches a tree or graph by searching branches of the tree first, starting at the root. It traverses left down a tree until it cannot go further. Once it reaches the end of the tree, it traverses back up trying the right child of nodes on that branch and if possible the left children of those right children. When finished with that branch, it moves to the node right and tries to left on all of its children until it reaches the bottom. The right node is evaluated last. A DFS is optimal for a tree that is deeper than it is	wide. It uses a stack to push nodes, which is LIFO and does not need to keep track of pointers and is therefore less memory intensive than a BFS. Once it cannot go further left, it evaluates the stack. This search algorithm tends to use recursion."
      ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        ""
      ],
      analysis: [
        "Best Case: \u0398()",
        "Average Case: \u0398(|E|+|V|) - E is edges, V is vertices",
        "Worst Case: \u0398()"
      ],
      code: [
        "Trees - Java",
        "https://github.com/masharp/useful-algorithms/blob/master/DataStructures/Trees.java"
      ]
    },
    {
      title: "Binary Search",
      descriptions: [
         "Binary Search divides in half the portion of the list that contains the item, until it is narrowed to just one."
       ],
      advantages: [
        "-"
      ],
      disadvantages: [
        "-"
      ],
      psudocode: [
        "Let min = 0, max = n - 1.",
        "Compute a guess as the average of the max and min, rounded down.",
        "If guess = target, return guess.",
        "If array[guess] < target --> min = guess - 1.",
        "Else min = guess + 1."
      ],
      analysis: [
        "Best Case: \u0398()",
        "Average Case: \u0398()",
        "Worst Case: \u0398()"
      ],
      code: [
        "",
        ""
      ]
    },
  ];
})();

/*

UNADDED NOTES
------------
RECURSION:
  Advantages:
    - Easier to visualize.
    - More elegant, ie. Reduces code size in complex iterations.
    Disadvantages:
    - Harder to understand .
    - The larger the input, the more memory allocated which can cause 				it to slow or throw stack overflow errors, which usually means that 					your base case never triggers.
Iterative:
  Advantages:
    - Generally uses less memory
    - Useful for moving through an array
  Disadvantages:

Greedy:
- A greedy algorithm is an algorithm that, while executing, selects only the 			information that meets certain criteria. The five components of a greedy 				algorithm are: A) A candidate set, from which a solution is created. B) A 				selection function, which chooses the best candidate to be added to the 				solution. C) A feasibility function, that is used to determine if a candidate 				can be used to contribute to a solution. D) An objective function, which 				assigns a value to a solution, or a partial solution. E) A solution function, 				which will indicate when the algorithm has discovered a complete 					solution. Greedy algorithms are used to find the optimal solution for a 				given problem. Generally used on only on sets of data where only a small 			portion of the data evaluated meets the desired result. Often a greedy 				algorithm can help reduce the Big O of an implemented algorithm.
Psudocode:
- greed algorithm (array)
  - var largest difference = 0
  - var new difference = find next difference (array[n], array[n+1])
  - largest difference =  new difference if is > largest difference
  - repeat above two steps until all differences have bee found
  - return largest difference

*/
