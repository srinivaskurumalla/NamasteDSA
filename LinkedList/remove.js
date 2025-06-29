/**  203
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head == null) return null;
  let prev = null;
  let curr = head;

  while (curr) {
    if (curr.val == val) {
      if (prev == null) {
        //head is equal to val
        if (head == null) return null; //if list become empty
        head = head.next;
        curr = head;
      } else {
        //removing if found in middle
        prev.next = curr.next;
        curr = curr.next;
      }
    } else {
      //not found the matched value
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
};

//using sentinal node(dummy node)
var removeElements2 = function (head, val) {
  let sentinal = new ListNode();
  sentinal.next = head; //linking with list

  let prev = sentinal;
  while (prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinal.next;
};
