// Piece of data - value
// Reference to the next node - next

export class ListNode {
  public next: ListNode | null;
  public previous: ListNode | null;
  constructor(public value: value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export type value = number | string;

class SinglyLinkedList {
  public head: ListNode | null;
  public tail: ListNode | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: value): this {
    const newNode = new ListNode(value);
    if (this.head && this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  pop(): ListNode | undefined {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentNode;
  }

  shift(): ListNode | undefined {
    if (!this.head) return undefined;
    const currentHead = this.head;
    const newHead = this.head.next;
    currentHead.next = null;
    this.head = newHead;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(value: value): this {
    const newNode = new ListNode(value);
    if (this.head) {
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index: number): ListNode | undefined | null {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      if (currentNode?.next) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  set(value: value, index: number): boolean {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(value: value, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new ListNode(value);
    const previousNode = this.get(index - 1);
    if (previousNode) {
      const nextNode = previousNode.next;
      previousNode.next = newNode;
      newNode.next = nextNode;
    }
    this.length++;
    return true;
  }

  remove(index: number): undefined | ListNode | null {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    if (previousNode) {
      const nodeToRemove = previousNode.next;
      if (nodeToRemove) {
        previousNode.next = nodeToRemove.next;
        nodeToRemove.next = null;
      }
      this.length--;
      return nodeToRemove;
    }
  }

  reverse(): this {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let previousNode = null;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      if (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }
    }
    return this;
  }
}

// Time Complexity:
// ! Insertion: O(1)
// Removal: O(1) or O(N)
// Searching: O(N)
// Accessing: O(N)

// const list = new SinglyLinkedList();
// list.push('HELLO');
// list.push('Goodbye');
// list.reverse();
// console.log(list);
