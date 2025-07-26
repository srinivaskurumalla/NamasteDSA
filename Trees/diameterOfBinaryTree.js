/** 543
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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  let findHeight = (curr) => {
    if (!curr) return 0;
    let leftHeight = findHeight(curr.left);
    let rightHeight = findHeight(curr.right);

    let currDiameter = leftHeight + rightHeight;
    maxDiameter = Math.max(currDiameter, maxDiameter);
    return 1 + Math.max(leftHeight, rightHeight);
  };
  findHeight(root);
  return maxDiameter;
};
