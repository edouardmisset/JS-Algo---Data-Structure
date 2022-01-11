// ! LIFO: Last In First Out

// Using an array as a stack (using push and pop or shift and unshift)

import { ListNode, value } from '../7_Singly_Linked_Lists/SinglyLinkedLists.ts'

// Creating our own Stack
class Stack {
  public first: ListNode | null;
  public last: ListNode | null;
  public size: number;
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value: value): number {
    const newNode = new ListNode(value);
    if (this.first) {
      newNode.next = this.first;
    } else {
      this.last = newNode;
    }
    this.first = newNode;
    return ++this.size;
  }

  pop(): value | undefined {
    if (!this.first) return undefined;
    const removedNode = this.first;
    if (this.first === this.last) this.last = null;
    const newFirst = this.first.next;
    removedNode.next = null;
    this.first = newFirst;
    this.size--;
    return removedNode.value;
  }
}

// Time Complexity:
// ! Insertion: O(1)
// ! Removal: O(1)
// Searching: O(N)
// Accessing: O(N)

const stack = new Stack()
stack.push('ONE')
stack.push('TWO')
stack.push('THREE')
console.log(stack.pop())
console.log(stack.pop())
