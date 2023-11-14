/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const dfs = (root : TreeNode | null) => {
    if(root === null || root === undefined)
        return;
    const temp: TreeNode = root.left;
    root.left = root.right;
    root.right = temp;
    dfs(root.left)
    dfs(root.right)
}

function invertTree(root: TreeNode | null): TreeNode | null {
    dfs(root);
    return root;
};