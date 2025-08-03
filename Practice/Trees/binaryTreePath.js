/** 257
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//Do Top down, keep building string at each node, if found leaf add it to result
var binaryTreePaths = function (root) {
    let result = [];

    let traverse = (curr, path) => {
        if (!curr) return;
        path += curr.val;

        //if leaf node
        if (!curr.left && !curr.right) {
            result.push(path);
            return;
        }

        //not a leaf node add "->" and traverse
        path += "->";

        traverse(curr.left, path);
        traverse(curr.right, path);
    }

    traverse(root, "");
    return result;
};