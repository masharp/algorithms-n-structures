/* LinkedList implementation with associated useful algorithms */

public class Node {
  int data;
  Node next;

  Node(int x) {
    data = x;
    next = null;
  }
}

//inserts node at specified position
public Node insertNode(Node head, int data, int position) {
  Node currentHead = head;
  Node newNode = new Node();

  newNode.data = data;
  newNode.next = null;

  if (head == null) { return head; }
  if (position == 0) {
      newNode.next = head;
      return newNode;
  }
  else {
      int currentPosition = 0;
      while ((currentPosition < position - 1) && (head.next != null)) {
          head = head.next;
          currentPosition++;
      }
      Node tempNode = head.next;
      head.next = newNode;
      head = head.next;
      head.next = tempNode;

      return currentHead;
  }
}

//deletes a node at specified position
public Node Delete(Node head, int position) {
  Node tmpNode = head;
  Node previousNode = null;

  if (head == null) { return head; }
  if (position == 0) { return head.next; }
  else {
      int currentPosition = 0;

      while(tmpNode != null) {
          if (currentPosition == position) {
              previousNode.next = tmpNode.next;
              return head;
          }
          previousNode = tmpNode;
          tmpNode = tmpNode.next;
          currentPosition++;
      }
  }
  return tmpNode;
}

//returns 0 if lists are not the same, 1 if they are
public int compareLists(Node headA, Node headB) {
    while(headA != null && headB != null) {
        if (headA.data != headB.data) {
            return 0;
        }
        headA = headA.next;
        headB = headB.next;
    }

    if (headA == null && headB == null) { return 1; }
    else {return 0;}

}

//Merges two sorted linked lists into a third sorted linked list, recursively (dangerous with large lists)
Node mergeLists(Node headA, Node headB) {

    Node newNode = new Node();

    if(headA == null) { return headB; }
    if(headB == null) { return headA; }

    if(headA.data < headB.data) {
        headA.next = MergeLists(headA.next, headB);
        return headA;
    } else {
        headB.next = MergeLists(headB.next, headA);
        return headB;
    }
}
