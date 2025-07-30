/** 124
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;
  let traverse = (curr) => {
    if (!curr) return 0;

    let leftMax = traverse(curr.left);
    let rightMax = traverse(curr.right);

    max = Math.max(
      max,
      curr.val + (leftMax < 0 ? 0 : leftMax) + (rightMax < 0 ? 0 : rightMax)
    ); //if it is negative, take it as 0;
    let pathMax = Math.max(leftMax, rightMax);
    let pathSum = curr.val + (pathMax < 0 ? 0 : pathMax); //if both left and right are negative, consider the curr node as pathMax
    return pathSum;
  };
  traverse(root);
  return max;
};

//same logic as above , but checking for -ve sum while traversing
var maxPathSum = function (root) {
  let max = root.val;
  let traverse = (curr) => {
    if (!curr) return 0;

    let leftMax = Math.max(0, traverse(curr.left)); //checking for -ve sum while traversing
    let rightMax = Math.max(0, traverse(curr.right));

    let currPathMax = curr.val + leftMax + rightMax;
    max = Math.max(max, currPathMax);

    return curr.val + Math.max(leftMax, rightMax);
  };
  traverse(root);
  return max;
};
