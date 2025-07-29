/** 199
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  //traverse like level order and store each level values in mini list
  //Then pull all last elements from each mini list
  if (!root) return [];
  let q = [root];
  let ans = [];
  while (q.length) {
    let level = q.length;
    let levelArr = [];
    for (let i = 0; i < level; i++) {
      let curr = q.shift();
      levelArr.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(levelArr);
  }
  //get all last elements
  let rightSideView = [];
  for (let i = 0; i < ans.length; i++) {
    let level = ans[i];
    // console.log("level", level, "val", level[level.length - 1]);

    rightSideView.push(level[level.length - 1]);
  }
  return rightSideView;
};

//It worked , but instead of using 2nd for loop and getting last elemet, we can direcctly add last elements to ans array
var rightSideView = function (root) {
  //traverse like level order and store last element of curr level to the list
  if (!root) return [];
  let q = [root];
  let rightSideView = [];
  while (q.length) {
    let level = q.length;
    for (let i = 0; i < level; i++) {
      let curr = q.shift();
      if (i == level - 1) rightSideView.push(curr.val); //adding only last value of that level
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
  }

  return rightSideView;
};
// Or also we can do level order traversal from right to left => mean pass right first then left
//store only first value of curr level
