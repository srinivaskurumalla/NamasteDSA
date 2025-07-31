/**979
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

 //Do Post order traversal and count the moves with absolute values by curr.val - 1
 //because curr node requires 1 node.

 //For each sub tree, it will be like try to balance tree, it returns extra coins
 //if it is not balanced, return required coins
var distributeCoins = function (root) {
    let moves = 0;

    let traverse = (curr) => {

        if (!curr) return 0;
        let left = traverse(curr.left);
        let right = traverse(curr.right);

        moves += Math.abs(left) + Math.abs(right);

        return left + right + curr.val - 1;
    }
    traverse(root);
    return moves;
};