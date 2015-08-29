/* Tree implementation with associated useful algorithms
    - by Michael Sharp
    - msharp.oh@gmail.com
    - www.softwareontheshore.com */

public class Node {
    int data;
    Node left;
    Node right;
}

//preorder (left -> right, top -> bottom) traversal of a Tree, recursively
public void traversePreorder(Node treeRoot) {

  if (treeRoot == null) { return; }

  System.out.print(treeRoot.data + " ");

  traversePreorder(treeRoot.left);
  traversePreorder(rootRoot.right);

}

//postorder (left -> right, bottom -> top) traversal of a Tree, recursively
public void traversePostorder(Node treeRoot) {

  if (treeRoot == null) { return; }

  traversePostorder(treeRoot.left);
  traversePostorder(rootRoot.right);

  System.out.print(treeRoot.data + " ");

}

//inorder (branch -> root) traversal of a Tree, recursively
public void traverseInorder(Node treeRoot) {

  if (treeRoot == null) { return; }

  traverseInorder(treeRoot.left);
  traverseInorder(rootRoot.right);

  System.out.print(treeRoot.data + " ");
}

//returns the height of the height branch of the tree, recursively with DFS
public void treeHeight(Node treeRoot) {
  if (treeRoot == null) { return 0; }

  //adds the root + the greater of the branches
  return 1 + Math.max(treeHeight(treeRoot.left), treeHeight(treeRoot.right));
}

//inserts a node into a Binary Search Tree at the appropriate position, with recursion
public Node insertNode(Node root,int value) {
    if (root == null) {

        Node temp = new Node();
        temp.left = null;
        temp.right = null;
        temp.data = value;
        
        return temp;
    }
    if (Integer.compare(value, root.data) == 0) {
        return root;
    }
    if (Integer.compare(value, root.data) < 0) {
        root.left = insertNode(root.left, value);
    }
    else {
        root.right = insertNode(root.right, value);
    }
    return root;
}
