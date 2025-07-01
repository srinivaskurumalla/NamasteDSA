/** 82
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
var deleteDuplicates = function (head) {
  let map = new Map(); //space O(n)
  let curr = head;
  while (curr) {
    // time O(n)
    if (!map.has(curr.val)) {
      map.set(curr.val, true);
    } else {
      map.set(curr.val, false);
    }
    curr = curr.next;
  }

  let prev = new ListNode();
  let newHead = prev;

  for (let key in map.keys()) {
    //time O(n)
    if (map.get(key)) {
      let node = new ListNode(Number(key)); //space O(n)
      prev.next = node;

      prev = node;
    }
  }
  return newHead.next;
};

//over all above algorithm take time and space O(n)

//In place modification
var deleteDuplicates = function (head) {
  let newHead = new ListNode();
  let prev = newHead;
  let curr = head;
  while (curr) {  //time O(n)
    let isDuplicate = false;

    while (curr.next && curr.val === curr.next.val) {
      isDuplicate = true;
      curr = curr.next;
    }
    if (isDuplicate) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }
  return newHead.next;
};

//time O(n), space O(1)
