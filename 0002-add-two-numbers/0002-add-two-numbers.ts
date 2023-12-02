/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const emptyNode = new ListNode(0, null);

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode(l1.val + l2.val, null);
    let c1 = l1.next;
    let c2 = l2.next;
    

    if(!c1) c1 = emptyNode;
    if(!c2) c2 = emptyNode;
    
    let current = head;
    let tempDivided = Math.floor(head.val / 10);
    
    head.val %= 10;
    let iter = 0;
    
    if(c1 === emptyNode && c2 === emptyNode){
        if(tempDivided != 0){
            current.next = new ListNode(tempDivided, null);
        }
        return current;
    };
    
    while(true){
        iter++;
//      Will be run if c1 not null and c2 not null
        let accumulated = 0;
        if(c1){
            accumulated += c1.val
        }
        if(c2){
            accumulated += c2.val
        }
        if(tempDivided != 0){
            accumulated += 1;
            tempDivided = 0;
        }

        tempDivided = Math.floor(accumulated / 10);
        accumulated %= 10;
        
        const newNode = new ListNode(accumulated, null);
        
        current.next = newNode;
        current = newNode;
        
        if(c1.next === null && c2.next === null) break;
        
        if(c1.next)
        c1 = c1.next;
        else c1 = emptyNode;
        if(c2.next)
        c2 = c2.next;
        else c2 = emptyNode;
    }
    if(tempDivided != 0){
        current.next = new ListNode(tempDivided, null);
    }
    return head;
};