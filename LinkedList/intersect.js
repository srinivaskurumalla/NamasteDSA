/** 160
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  let listA = headA;
  let listB = headB;
  while (listA) {
    if (!set.has(listA)) {
      set.add(listA);

      listA = listA.next;
    }
  }
  while (listB) {
    if (set.has(listB)) {
      return listB;
    }
    listB = listB.next;
  }

  return null;
};
