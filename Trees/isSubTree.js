/**572
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

//Let's compare each node/tree
//it takes T = (m*n), S = (m+n)
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  if (isSame(root, subRoot)) return true; //check if both trees are same

  //else check it's left and right
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
let isSame = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  return (
    root1.val === root2.val &&
    isSame(root1.left, root2.left) &&
    isSame(root1.right, root2.right)
  );
};

//it take T = O(m+n) , S = O(m+n)
var isSubtree = function (root, subRoot) {
  //build Unique hash for main tree
  //Unique hash key should include nulls, represent null with # and put delimiter (*) between each node
  let hash1 = buildHash(root);
  //build Unique hash for sub tree
  let hash2 = buildHash(subRoot);
  //check whether sub tree is part of main tree
  // console.log(hash1);
  // console.log(hash2);

  return hash1.includes(hash2);
};

//buildHash or we call it as serialization
let buildHash = function (curr) {
  let hash = "";
  let preOrder = (curr) => {
    if (!curr) {
      hash += "-#";
      return;
    }

    hash = hash + "-" + curr.val;
    preOrder(curr.left);
    preOrder(curr.right);
  };
  preOrder(curr);
  return hash;
};
