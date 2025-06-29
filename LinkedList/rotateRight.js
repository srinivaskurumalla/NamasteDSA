/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;
    let curr = head;
    let length = 0;
    //reach to end node to find length
    while (curr) {
        curr = curr.next;
        length++;
    }
    //curr.next = head;
    k = k % length;
    //two pointer - start and end => move end to kth place
    let start = head;
    let end = head;
    for (let i = 0; i < k; i++) {
        end = end.next;
    }

    while (end.next) {
       
        start = start.next;
         end = end.next;
    }
    end.next = head;
    let newHead = start.next;

    start.next = null;
    return newHead;
};
