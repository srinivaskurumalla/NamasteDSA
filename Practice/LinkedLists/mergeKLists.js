/** 23
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//using Queue
var mergeKLists = function (lists) {
  let q = [];
  let k = lists.length;

  while (lists.some((list) => list != null)) {
    let smallestNode = null;
    let listOfSmallest = -1;
    for (let i = 0; i < k; i++) {
      if (
        lists[i] !== null &&
        (smallestNode == null || lists[i].val < smallestNode.val)
      ) {
        smallestNode = lists[i];
        listOfSmallest = i;
      }
    }

    if (smallestNode) {
      q.push(smallestNode);
      //remove the smallestNode and make the new headNode

      lists[listOfSmallest] = lists[listOfSmallest].next;
    }
    console.log(q.map((node) => node.val));
  }

  let dummy = new ListNode();
  let tail = dummy;
  while (q.length) {
    let queue = q.shift();
    tail.next = queue;
    tail = tail.next;
  }

  return dummy.next;
};

//Without Queue
var mergeKLists = function (lists) {
  let k = lists.length;
  let dummy = new ListNode();
  let curr = dummy;

  while (true) {
    let smallestNode = null;
    let smallestIndex = -1;

    //Find the smallest node among current heads
    for (let i = 0; i < k; i++) {
      if (lists[i] != null) {
        if (smallestNode == null || lists[i].val < smallestNode.val) {
          smallestNode = lists[i];
          smallestIndex = i;
        }
      }
    }
    if (smallestNode == null) break; //All lists are fully traversed

    //make the smallest to curr.next
    curr.next = smallestNode;
    curr = curr.next;

    //move head of smallest to next node
    // Move the pointer in the list from which we picked the smallest node
    lists[smallestIndex] = lists[smallestIndex].next;
  }
  return dummy.next;
};
