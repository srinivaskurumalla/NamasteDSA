/** 98
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
//Do In order traversal and check if curr value is greater than prev value
var isValidBST = function (root) {
    let ans = true;
    let minVal = -Infinity;
    let traverse = (curr) => {
        if (!curr) return -Infinity;

        traverse(curr.left);
        if (curr.val != -Infinity && curr.val <= minVal) {
            ans = ans & false;

        }
        minVal = curr.val;


        traverse(curr.right);
    }
    traverse(root);
    return ans;
};


//Now let's do this by checkig each sub tree is a valid BST using lower and higher bounds
var isValidBST = function (root) {
    let ans = true;
    let isBST = (curr, lower, higher) => {
        if (!curr) return true;

        if ((lower != null && curr.val <= lower) || (higher != null && curr.val >= higher)) {
            return false;
        }

        let isLeftBST = isBST(curr.left, lower, curr.val);
        let isRightBST = isBST(curr.right, curr.val, higher);

        return isLeftBST && isRightBST;
    }
    ans = isBST(root, null, null);//root value can be anything, no limits
    return ans;
};