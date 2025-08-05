/**99
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let validate = (curr, lower, higher) => {
    if (!curr) return true;
    if (lower != null && curr.val <= lower) {
      //swap
      [curr.val, curr.left.val] = [curr.left.val, curr.val];
    }

    if (higher != null && curr.val >= higher) {
      //swap
      [curr.val, curr.right.val] = [curr.right.val, curr.val];
    }

    let isLeftBST = validate(curr.left, lower, curr.val);
    let isRightBST = validate(curr.right, curr.val, higher);

    return isLeftBST && isRightBST;
  };

  validate(root, null, null);
};

var recoverTree = function (root) {
  validateBST(root);
};
//Above code didn't worked.

//let's do In order and find first and second nodes that are violating BST
var recoverTree = function (root) {
  let prev = null;
  let first = null;
  let second = null;

  const traverse = (curr) => {
    if (!curr) return;

    traverse(curr.left);

    if (prev && curr.val < prev.val) {
      if (!first) first = prev;
      second = curr;
    }

    prev = curr;
    traverse(curr.right);
  };

  traverse(root);
  if (first && second) {
    [first.val, second.val] = [second.val, first.val];
  }
};
