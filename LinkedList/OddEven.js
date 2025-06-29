const MyLinkedList = require("./LinkedListP");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head && head.next) {
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while ( odd.next && even.next) {
      odd.next = odd.next.next;
      odd = odd.next;
      even.next = even.next.next;
      even = even.next;
    }

    odd.next = evenHead;
  }
  return head;
};
let ll = [2, 1, 3, 5, 6, 4, 7];

let list = new MyLinkedList();
for (let i = 0; i < ll.length; i++) {
  list.addAtTail(ll[i]);
}
console.log(oddEvenList(list.head));
