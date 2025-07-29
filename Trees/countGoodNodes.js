/** 1448
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
//BOTTOM - UP Approach
var goodNodes = function (root) {
    //while traversing check if it is a good node and update the maximum seen so far
    let goodNodes = 0;
    let traverse = (curr, maxSeenSoFar) => {
        if (curr.val >= maxSeenSoFar) {
            ++goodNodes;
        }
        maxSeenSoFar = Math.max(maxSeenSoFar, curr.val);

        curr.left && traverse(curr.left, maxSeenSoFar);
        curr.right && traverse(curr.right, maxSeenSoFar);
    }
    traverse(root, -Infinity);
    return goodNodes;
};