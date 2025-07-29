/** 116
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return root;
    //2 steps => assigning nodes as next 
    let traverse = (curr) => {
        if (curr.left) {
            curr.left.next = curr.right; //1
        }
        if (curr.right && curr.next) {
            curr.right.next = curr.next.left; //2
        }
        curr.left && traverse(curr.left);
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return root;
};