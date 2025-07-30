/** 530
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

//Do In order traversal and calculate min diff b/w each adjacent nodes
var getMinimumDifference = function (root) {
    let prevVal = null;
    let minDiff = Infinity;
    let traverse = (curr) => {
        if (!curr) return;
        traverse(curr.left);
        if (prevVal != null) {
            minDiff = Math.min(minDiff, Math.abs(prevVal - curr.val))
        }
        prevVal = curr.val;
        traverse(curr.right);
    }

    traverse(root);
    return minDiff;
};