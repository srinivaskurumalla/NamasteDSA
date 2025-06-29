// Node class
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class LinkedListP {
  constructor() {
    this.head = null;
  }

  addAtTail(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
  }
}

module.exports = LinkedListP;
