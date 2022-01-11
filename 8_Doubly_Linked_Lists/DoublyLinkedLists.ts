import { ListNode, value } from '../7_Singly_Linked_Lists/SinglyLinkedLists.ts'

class DoublyLinkedList {
  public head: ListNode | null;
  public tail: ListNode | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: value): this {
    const newTail = new ListNode(value)
    if (this.tail) {
      this.tail.next = newTail
      newTail.previous = this.tail
    } else {
      this.head = newTail
    }
    this.tail = newTail
    this.length++
    return this
  }

  pop(): ListNode | undefined {
    if (!this.length) return undefined

    const oldTail = this.tail
    if (this.length === 1) {
      this.tail = null
      this.head = null
    } else {
      if (oldTail?.previous) {
        this.tail = oldTail.previous
        this.tail.next = null
        oldTail.previous = null
      }
      this.length--
      return oldTail === null ? undefined : oldTail;
    }
  }

  shift(): ListNode | undefined {
    if (!this.head) return undefined
    const oldHead = this.head
    const newHead = this.head.next
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      oldHead.next = null
      if (newHead?.previous) newHead.previous = null
      this.head = newHead
    }
    this.length--
    return oldHead
  }

  unshift(value: value): this {
    const newNode = new ListNode(value)
    if (this.head) {
      this.head.previous = newNode
      newNode.next = this.head
    } else {
      this.tail = newNode
    }
    this.head = newNode
    this.length++
    return this
  }

  get(index: number): ListNode | undefined | null {
    if (index < 0 || index >= this.length) return undefined

    let currentNode = this.head
    let count = 0;
    // Starting from the head
    if (index < this.length / 2) {
      while (index < this.length / 2) {
        if (currentNode?.next) currentNode = currentNode.next
        count++
      }
    } else {
      // Starting from the tail
      currentNode = this.tail
      count = this.length - 1
      while (count !== index) {
        if (currentNode?.previous) currentNode = currentNode.previous
        count--
      }
    }
    return currentNode
  }

  set(value: value, index: number): boolean {
    const foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }

  insert(value: value, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)

    const newNode = new ListNode(value);
    const previousNode = this.get(index - 1);
    if (previousNode) {
      const nextNode = previousNode.next;

      if (nextNode) nextNode.previous = newNode
      previousNode.next = newNode;
      newNode.next = nextNode;
      newNode.previous = previousNode
    }
    this.length++;
    return true;
  }

  remove(index: number): ListNode | undefined | null {
    // Edge cases : 
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const nodeToRemove = this.get(index)
    if (nodeToRemove) {
      const previousNode = nodeToRemove.previous
      const nextNode = nodeToRemove.next
      if (nextNode) nextNode.previous = previousNode
      if (previousNode) previousNode.next = nextNode
      nodeToRemove.next = null
      nodeToRemove.previous = null
      this.length--
      return nodeToRemove
    }
  }

  reverse(): this {
    let currentNode = this.head
    this.head = this.tail
    this.tail = currentNode
    let nextNode = null

    for (let i = 0; i < this.length; i++) {
      if (currentNode) {
        nextNode = currentNode.next
        currentNode.next = currentNode.previous
        currentNode.previous = nextNode
        currentNode = nextNode
      }
    }
    return this
  }

}

// Time Complexity:
// ! Insertion: O(1)
// ! Removal: O(1)
// Searching: O(N)
// Accessing: O(N)

const list = new DoublyLinkedList()
const first = new ListNode(1)
const next = new ListNode(2)
first.next = next
first.next.previous = first

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.pop()
list.shift()
list.unshift(1)
list.get(1)
list.set(99, 1)
list.insert(100, 2)
list.remove(2)
list.reverse()

console.log(list)