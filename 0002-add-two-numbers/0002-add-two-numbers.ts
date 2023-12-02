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
    const beforeHead = new ListNode(0);
    let current = beforeHead;
    let divide = 0;
    while(l1 || l2){
        let acc = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + divide;
        divide = Math.floor(acc / 10);
        acc %= 10;
        const newNode = new ListNode(acc, null);
        current.next = newNode;
        current = newNode;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(divide){
        current.next = new ListNode(divide, null)
    }
    return beforeHead.next;
};