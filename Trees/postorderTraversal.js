/** 145
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
var postorderTraversal = function (root) {
    //left -> right -> root
    let ans = [];

    function traverse(curr) {
        if (!curr) return;
        traverse(curr.left); //go to left, then right, then root
        traverse(curr.right);
        ans.push(curr.val);
    }

    traverse(root);
    return ans;
};