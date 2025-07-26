/**110
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let ans = true;
    let calcHeight = (curr) => {
        if (!curr || !ans) return 0; //once ans is false return 0 for all current nodes, no need to check the childre => like early exit
        let leftHeight =  calcHeight(curr.left);
        let rightHeight =  calcHeight(curr.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            ans = false//ans && false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    calcHeight(root);
    return ans;
};