/** 94
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

//Using recursion
var inorderTraversal = function (root) {
  //left -> root -> right
  let ans = [];
  let traverse = function (curr) {
    if (!curr) {
      return;
    }
    traverse(curr.left); //push left first, then go to root, then right
    ans.push(curr.val);
    traverse(curr.right);
  };
  traverse(root);
  return ans;
};

//Using Inorder => left - root - right
var inorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let stack = [];
  let curr = root;
  while (stack.length || curr) {
    while (curr) {
      //add all left nodes
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
};
