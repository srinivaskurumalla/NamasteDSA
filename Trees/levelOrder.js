/** 102
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//Using Iterative approach
var levelOrder = function (root) {
    if (!root) return [];
    let ans = []
    let q = [root];
    while (q.length) {
        let levelArr = [];
        let levelSize = q.length; //to keep track of levels
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val)
        }
        ans.push(levelArr);
    }
    return ans;
};



//Using recursion approach
var levelOrder = function (root) {
    if (!root) return [];
    let ans = []

    let traverse = (curr, level) => {
        if (!ans[level]) ans[level] = [] //if level/index not exist add empty array
        ans[level].push(curr.val);

        curr.left && traverse(curr.left, level + 1);//increase level when adding children
        curr.right && traverse(curr.right, level + 1);
    }
    traverse(root, 0);
    return ans;
};