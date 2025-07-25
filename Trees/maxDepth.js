/** 104
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//Top - Down approach
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepth = 1;
  let traverse = (curr, currDepth) => {
    //maintain depth at each level
    maxDepth = Math.max(maxDepth, currDepth);
    curr.left && traverse(curr.left, currDepth + 1);
    curr.right && traverse(curr.right, currDepth + 1);
  };
  traverse(root, maxDepth); //pass initial depth
  return maxDepth;
};

//Bottom - Up approach

var maxDepth = function (root) {
  let traverse = (curr) => {
    if (!curr) return 0;
    let leftMax = curr.left && traverse(curr.left);
    let rightMax = curr.right && traverse(curr.right);
    return 1 + Math.max(leftMax, rightMax);
  };
  traverse(root);
};

//Bottom - Up approach
var maxDepth = function (root) {
    if (!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax, rightMax);
};
