/** 92
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left == right) return head;
  let curr = head;
  let tempLeft = left;
  let leftBehind = null;

  //go till 1 behind left
  while (left - 1 !== 0) {
    leftBehind = curr;
    curr = curr.next;
    --left;
  }
  let leftNode = curr;
  //reverse till right
  let prev = null;
  let target = right - tempLeft + 1;
  while (target !== 0) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    --target;
  }
  //attach left behind and right after node
  leftNode.next = curr;
  if (leftBehind) {
    leftBehind.next = prev;
  } else head = prev;

  return head;
};

// Using single loop -> in one go

var reverseBetween = function (head, left, right) {
    if (left == right) return head;

    let curr = head;
    let tempLeft = left;
    let prev = null;
    let leftBehind = null;
    let target = right - tempLeft + 1;
    let leftNode = curr;

    while (curr && (left - 1 !== 0 || target !== 0)) {
        // Step 1: Move to the node before the 'left' node
        if (left - 1 !== 0) {
            leftBehind = curr;
            curr = curr.next;
            leftNode = curr;
            --left;
        } else {
            // Step 2: Reverse the sublist from 'left' to 'right'
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            --target;
        }
    }

    // Step 3: Connect the reversed part back to the list
    leftNode.next = curr;
    if (leftBehind) {
        leftBehind.next = prev;
    } else {
        head = prev;
    }

    return head;
};

