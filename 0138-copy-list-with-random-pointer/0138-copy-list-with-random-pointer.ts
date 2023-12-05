/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    const map = new Map(); 
    let cursor: Node = head;
    while(cursor) {
        const newNode = new Node(cursor.val, null, null);
        map.set(cursor, newNode)
        cursor = cursor.next;
    }
    
    cursor = head;
    while(cursor) {
        if(cursor.random){
            map.get(cursor).random = map.get(cursor.random);
        }
        if(cursor.next){
            map.get(cursor).next = map.get(cursor.next);
        }
        cursor = cursor.next;
    }
    return map.get(head);
};