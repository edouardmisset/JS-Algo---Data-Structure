// ! Binary Heap:
// Binary Heaps are trees.
// A binary heap is as compact as possible.
// All the children of each node are as full as they can be and left children are filled out first.
// Binary Heaps are used to implement Priority Queues.
// Heaps are also often used with graph traversal algorithms.

// ! Min Binary Heap:
// Parents nodes are always smaller than child nodes

class PrioNode {
  constructor(public value: number | string = 0, public priority: number = 0) { }
}

class PriorityQueue {
  public values: PrioNode[];
  constructor() {
    this.values = [];
  }

  // Swapping logique
  private swap(arr: PrioNode[], index1: number, index2: number): PrioNode[] {
    return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return this.getLeftChildIndex(parentIndex) + 1;
  }

  private bubbleUp(index = this.values.length - 1): number {
    const elementPrio = this.values[index].priority;

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (elementPrio >= this.values[parentIndex].priority) break;
      this.swap(this.values, index, parentIndex);
      index = parentIndex;
    }
    return index;
  }

  private trickleDown(index = 0): number {
    const { length } = this.values;
    const currentPrio = this.values[index].priority;
    let swap = null;

    while (true) {
      swap = null;
      let leftChildPrio;
      let rightChildPrio;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (leftChildIndex < length) {
        leftChildPrio = this.values[leftChildIndex].priority;
        if (leftChildPrio < currentPrio) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChildPrio = this.values[rightChildIndex].priority;
        if (
          (!swap && rightChildPrio < currentPrio) ||
          (swap && rightChildPrio < Number(leftChildPrio))
        ) {
          swap = rightChildIndex;
        }
      }
      if (!swap) break;
      this.swap(this.values, index, swap);
      index = swap;
    }
    return swap ? swap : index;
  }

  public enqueue(value: number | string, priority: number): number {
    const newNode = new PrioNode(value, priority);
    const index = this.values.push(newNode) - 1;
    return index > 0 ? this.bubbleUp(index) : index;
  }

  // Removes the maximum priority element in the heap (and returns it)
  public dequeue(): PrioNode | undefined {
    if (this.values.length > 0) {
      this.swap(this.values, 0, this.values.length - 1);
      const minPrio = this.values.pop();
      this.trickleDown(0);
      return minPrio;
    }
  }
}

const prioQ = new PriorityQueue();
prioQ.enqueue('common cold', 5);
prioQ.enqueue('high fever', 3);
prioQ.enqueue('gunshot wound', 1);
console.log(prioQ);
prioQ.dequeue();
console.log(prioQ);
