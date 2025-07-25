/** 112
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

//Top-down approach

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let ans = false;
  let traverse = (curr, currentSum) => {
    let sum = currentSum + curr.val;
    if (!curr.left && !curr.right) {
      //when leaf node reached, check with targetSum
      if (sum === targetSum) {
        ans = true; //ans || true;
      }
    }
    curr.left && traverse(curr.left, sum); //pass currSum as curr node val + prev sum
    curr.right && traverse(curr.right, sum);
  };
  traverse(root, 0); //Initiall pass currSum as 0
  return ans;
};

//Bottom - up approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === targetSum; //At leaf node value and target should be equal
  }

  let remainingSum = targetSum - root.val;

  let leftTreeHasTargetSum = hasPathSum(root.left, remainingSum); //pass the remaining sum as target
  let rightTreehasTargetSum = hasPathSum(root.right, remainingSum);

  return leftTreeHasTargetSum || rightTreehasTargetSum;
};
