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
var preorderTraversal = function (root) {
    let ans = [];

    let traverse = function (curr) {
        if (!curr) return;
        ans.push(curr.val); //push root first, then go to left, then right
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return ans;
};