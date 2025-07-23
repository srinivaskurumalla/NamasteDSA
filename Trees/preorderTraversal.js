/** 144
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

//using recursion
var preorderTraversal = function (root) {
  let ans = [];

  let traverse = function (curr) {
    if (!curr) return;
    ans.push(curr.val); //push root first, then go to left, then right
    traverse(curr.left);
    traverse(curr.right);
  };
  traverse(root);
  return ans;
};

//Iterative approach

var preorderTraversal = function (root) {
    let stack = [];
    let ans = [];
    if (root != null) stack.push(root);
    while (stack.length > 0) {
        let curr = stack.pop();
        ans.push(curr.val);
        if (curr.right != null) stack.push(curr.right); //push right first then left
        if (curr.left != null) stack.push(curr.left); //because we want left to pop first
    }
    return ans;
};
