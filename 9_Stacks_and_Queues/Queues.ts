// ! FIFO: First In First Out

import { ListNode, value } from '../7_Singly_Linked_Lists/SinglyLinkedLists.ts'

// Using an array
const q = []

q.push(1)
q.push(2)
q.push(3)
console.log(q)
q.shift()
console.log(q)

// OR
const q2 = []

q2.unshift(1)
q2.unshift(2)
q2.unshift(3)
console.log(q2)
q2.pop()
console.log(q2)

// Creating our own class

class Queue {
  public first: ListNode | null;
  public last: ListNode | null;
  public size: number;
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value: value): number {
    const newNode = new ListNode(value)
    if (this.first && this.last) {
      this.last.next = newNode
    } else {
      this.first = newNode
    }
    this.last = newNode
    return ++this.size
  }

  dequeue(): value | undefined {
    if (!this.first) return undefined

    const removedNode = this.first
    if (this.first === this.last) this.last = null
    if (removedNode) {
      this.first = removedNode.next
      removedNode.next = null
      this.size--
      return removedNode.value
    }
  }
}

// Time Complexity:
// ! Insertion: O(1)
// ! Removal: O(1)
// Searching: O(N)
// Accessing: O(N)

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue)
queue.dequeue()
console.log(queue)
