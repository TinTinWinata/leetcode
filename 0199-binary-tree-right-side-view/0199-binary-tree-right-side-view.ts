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


function bfs(root: TreeNode, map: any){
    const result = []
    const queue = []
    queue.push({node: root, level: 0});
    while(queue.length > 0){
        const curr = queue.shift();
        map[curr.level] = curr.node.val; 
        
        if(curr.node.left){
            queue.push({node: curr.node.left, level: curr.level + 1});
        }
        
        if(curr.node.right){
            queue.push({node: curr.node.right, level: curr.level + 1});
        }
    }
}

function rightSideView(root: TreeNode | null): number[] {
    if(!root) return [] 
    const map = {}
    bfs(root, map)
    return Object.values(map)
};