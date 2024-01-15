/**
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// BRUTE FORCE
// -- INCOMPLETE
// -- FAILS FOR LARGE NUMBERS
var addTwoNumbers = function(l1, l2) {
    let list2 = [];
    let list1 = [];
    let l1node = l1;
    let l2node = l2;

    while (l1node !== null) {
        list1.push(l1node.val);
        l1node = l1node.next;
    }

    console.log(list1);

    while (l2node !== null) {
        list2.push(l2node.val);
        l2node = l2node.next;
    }

    let l1val = +list1.reverse().join('');
    let l2val = +list2.reverse().join('');
    let added = (l1val + l2val).toString().split('').reverse();
    let head = new ListNode();
    let current = head;

    for (let i = 0; i < added.length; i++) {
        current.next = new ListNode(+added[i]);
        current = current.next;
    }

    return head.next;
};
