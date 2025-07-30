/** 235
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        }
        else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        }
        else return root;
    }
};


var lowestCommonAncestor = function (root, p, q) {

    let ans = null;
    let traverse = (curr, p, q) => {

        if (p.val < curr.val && q.val < curr.val) {
            traverse(curr.left, p, q);
        }
        else if (p.val > curr.val && q.val > curr.val) {
            traverse(curr.right, p, q);
        }
        else ans = curr;
    }
    traverse(root, p, q);
    return ans;
};

var lowestCommonAncestor = function (root, p, q) {

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else return root;
};