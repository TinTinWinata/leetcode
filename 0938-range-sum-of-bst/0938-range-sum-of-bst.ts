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




function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let total = 0;
    
    function recrusive(root:TreeNode, low : number, high: number){
        if(root === null){
            return;
        }

        if(root.val >= low && root.val <= high){
            console.log('Root Val : ', root.val)
            total += root.val;
        }

        recrusive(root.left, low, high);
        recrusive(root.right, low, high);
    }
    
    recrusive(root, low, high);
    return total;
};