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
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let newHead = head.next;
  let single = head;
  let pair = head.next;

  let lastSingle = null;
  while (single && pair) {
    single.next = pair.next;
    pair.next = single;

    if (lastSingle) {
      lastSingle.next = pair;
    }

    lastSingle = single;

    single = single?.next;
    pair = single?.next;
  }

  return newHead;
};

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let p = new ListNode();
  p.next = head;

  let curr = head;
  let n = curr.next;
  let newHead = n;
  while (curr) {
    p.next = n;
    n.next = curr;
    curr.next = n.next;

    p = n;
    c = p.next;
    n = c?.next;
  }
  return newHead;
};
