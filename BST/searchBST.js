/** 700
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    while (root) {
        if (root.val < val) {
            //go to right
            root = root.right;
        }
        else if (root.val > val) {
            //go to left
            root = root.left;
        }
        else {
            return root;
        }
    }
    return null;
};

var searchBST = function (root, val) {
    //let do this in a recursive way 
    //TOP - DOWN
    let ans = null;
    let traverse = (curr) => {
        if (curr.val == val) ans = curr;

        else {
            if (curr.val < val) {
                curr.right && traverse(curr.right);
            }
            else {
                curr.left && traverse(curr.left);
            }
        }
    }
    traverse(root);
    return ans;
};

var searchBST = function (root, val) {
    //Now let's do this in Bottom - Up approach
    if (!root || root.val == val) return root;
    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);
};