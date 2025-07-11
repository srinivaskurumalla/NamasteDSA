/**
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
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
 
  let resultNode = new ListNode();
  let head = resultNode;
  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0 )+ (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
   let digit = sum % 10;

    head.next = new ListNode(digit);

    head = head.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return resultNode.next;
};