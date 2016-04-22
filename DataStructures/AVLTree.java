/* An AVL tree implementation with insert and balance methods
    - by Michael Sharp
    - michael@softwareontheshore.com
    - www.softwareontheshore.com */

// ----------------- IN PROGRESS ----------------------------

public class Node {
    int data;
    Node left;
    Node right;
}

//insert node into BST
static Node insertNode(Node root,int val) {
    int right = 0;
    int left = 0;

    if (root == null) {

        Node temp = new Node();
        temp.left = null;
        temp.right = null;
        temp.data = val;

        return temp;
    }
    if (Integer.compare(val, root.val) == 0) {
        return root;
    }
    if (Integer.compare(val, root.val) < 0) {
        root.left = insertNode(root.left, val);
        left = 1;
    }
    else {
        root.right = insertNode(root.right, val);
        right = 1;

   if (right == 1){ root.right.ht++; }
   if (left == 1){ root.left.ht++; }

   return rebalanceTree(root);
}

//rebalance after insert
static Node rebalanceTree(Node root) {
    if ((root.left.ht - root.right.ht) < -1 || (root.left.ht - root.right.ht) > 1) {

    }
}
