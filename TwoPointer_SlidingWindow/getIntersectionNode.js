/** 160
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//Also solved as part of Linked List


var getIntersectionNode = function (headA, headB) {

    //Using two pointe approach

    //Step1: Find the length of A Linked List
    let lengthOfA = 1;
    let dummyA = headA;
    while (dummyA) {
        dummyA = dummyA.next;
        lengthOfA++;
    }
    //Step2: Find the length of B Linked List
    let lengthOfB = 1;
    let dummyB = headB;
    while (dummyB) {
        dummyB = dummyB.next;
        lengthOfB++;
    }
    //Step3: Find the difference and move by those difference from larget list
    if (lengthOfA > lengthOfB) {
        let diff = lengthOfA - lengthOfB;
        while (diff > 0) {
            headA = headA.next;
            diff--;
        }
    }
    else {
        let diff = lengthOfB - lengthOfA;
        while (diff > 0) {
            headB = headB.next;
            diff--;
        }
    }
    //Step4: Compare each node
    while (headA && headB) {
        if (headA == headB) {
            return headA
        }
        headA = headA.next
        headB = headB.next
    }

    return null;
};




var getIntersectionNode = function (headA, headB) {
    //Using two pointers only, but in different way
    //start both head point at once, if anything reaches null, point it to other list head

    let pA = headA;
    let pB = headB;
    while (pA !== pB) { //both will point to null if there is no intersection after m+n cycles
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }

    return pA; //or pB
};