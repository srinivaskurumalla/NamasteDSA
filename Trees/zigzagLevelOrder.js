/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//Instead of checking even or odd at recursion passing
//check it while pushing to ans array
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [];

  let traverse = (curr, currLevel) => {
    if (!ans[currLevel]) ans[currLevel] = [];
    if (currLevel % 2 == 0) {
      ans[currLevel].push(curr.val);
    } else {
      ans[currLevel].unshift(curr.val);
    }

    curr.left && traverse(curr.left, currLevel + 1);
    curr.right && traverse(curr.right, currLevel + 1);
  };
  traverse(root, 0);
  return ans;
};

//Instead of checking even or odd at recursion passing
//check it while pushing to ans array

//Now let's do this via BFS
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  let level = 0;
  while (q.length) {
    let levelArr = [];
    let levelOrder = q.length;

    for (let i = 0; i < levelOrder; i++) {
      let curr = q.shift();

      //if level is odd push in reverse else correcty
      if (level % 2 == 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    level += 1;
    ans.push(levelArr);
  }

  return ans;
};
