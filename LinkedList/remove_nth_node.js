/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //**********Two pass approach

  //Add sentinal node before head
  let sentinal = new ListNode();
  sentinal.next = head;

  //calculate length to find deletePosition
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  let deletePosition = length - n + 1;

  //reach to prev node,  1 less than delete node
  let prev = sentinal;
  for (let i = 1; i < deletePosition; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinal.next;
};

var removeNthFromEnd = function (head, n) {
  //**********One pass approach with two pointer (first and second)

  //Create Sentinal node and add at start
  let sentinal = new ListNode();
  sentinal.next = head;

  //move the first pointer ahead by n
  let second = sentinal;
  let first = sentinal;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  //move both pointer ahead by 1 step till first reach end
  while (first) {
    first = first.next;
    second = second.next;
  }
  //remove the node next to second node
  second.next = second.next.next;

  return sentinal.next;
};
