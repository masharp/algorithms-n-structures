/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Base case: list1 has terminated, return list2
    if (! list1) {
        return list2;
    }

    // Base case: list2 has terminated, return list1
    if (! list2) {
        return list1;
    }

    // If the current value of list1 is less than or equal to the current value of list2
    //   swap the next pointer of list1 with the result of mergeTwoLists(list1.next, list2)
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
