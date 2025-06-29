var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return isArrayPalindrome(arr);
};

var isArrayPalindrome = function (arr) {
  let n = arr.length;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    if (arr[i] != arr[n - i - 1]) return false;
  }
  return true;
};
//

var isPalindrome2 = function (head) {
  //find the middle node
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow;

  //reverse the second half
  let curr = mid;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  } //prev will reach to end node

  //compare start and end nodes till middle
  let firstList = head;
  let secondList = prev;
  while (secondList) {
    if (firstList.val != secondList.val) return false;
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
