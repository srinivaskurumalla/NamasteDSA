/** 230
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//Do In-Order traversal and keep reducing k value, if k reaches 0 , we found kth smallest
var kthSmallest = function (root, k) {
    let ans = -1;
    let counter = 1;
    let traverse = (curr, kth) => {
        if (!curr || ans != -1) return; //early exit
        traverse(curr.left, kth);

        if (kth == counter) ans = curr.val;
        ++counter;
        traverse(curr.right, kth);

    }
    traverse(root, k);
    return ans;
};
//Do In-Order traversal and keep reducing k value, if k reaches 0 , we found kth smallest
var kthSmallest = function (root, k) {
    let ans = null;
    //let counter = 1;
    let traverse = (curr) => {
        if (!curr || ans) return; //early exit
        traverse(curr.left);
        --k;
        if (k == 0) ans = curr.val;
        traverse(curr.right);

    }
    traverse(root);
    return ans;
};