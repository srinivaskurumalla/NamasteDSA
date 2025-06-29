/** 141
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let set = new Set();
  let curr = head;
  while (curr && !set.has(curr)) {
    set.add(curr);
    curr = curr.next;
  }
  return curr ? true : false;
};

//the above logic has
//time complexity = O(n)
//space complexity = O(n)

var hasCycle2 = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

//above take space complexity  = O(1) and Time complexity = O(n)