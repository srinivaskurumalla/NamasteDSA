/** 236
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
    let ans = null

    let traverse = (curr) => {
        let count = 0;

        if (!curr) return 0;

        let leftCount = traverse(curr.left);
        let rightCount = traverse(curr.right);

        if (curr.val == p.val || curr.val == q.val) {
            ++count;
        }
        count = count + leftCount + rightCount;
        if (count == 2 && !ans) {
            ans = curr;
        }
        return count;
    }
    traverse(root);
    return ans;
};