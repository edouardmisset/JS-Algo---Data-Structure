// ! Binary Heap:
// Binary Heaps are trees.
// A binary heap is as compact as possible.
// All the children of each node are as full as they can be and left children are filled out first.
// Binary Heaps are used to implement Priority Queues.
// Heaps are also often used with graph traversal algorithms.

// ! Max Binary Heap:
// Parents nodes are always larger than child nodes
// Each parent has at most 2 children

// ! Min Binary Heap:
// Parents nodes are always smaller than child nodes

class MaxBinaryHeap {
  public values: number[];
  constructor() {
    this.values = [];
  }

  // Swapping logique
  private swap(arr: number[], index1: number, index2: number): number[] {
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
    let parentIndex = this.getParentIndex(index);
    while (this.values[parentIndex] < this.values[index]) {
      this.swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
    return index;
  }

  private trickleDown(index = 0): number {
    const { length } = this.values;
    const currentValue = this.values[index];
    let swap = null;

    while (true) {
      swap = null
      let leftChild;
      let rightChild;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > currentValue) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild > currentValue) ||
          (swap && rightChild > Number(leftChild))
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

  public insert(value: number): number {
    const index = this.values.push(value) - 1;
    return this.bubbleUp(index);
  }

  // Removes the maximum element in the heap (and returns it)
  public extractMax(): number | undefined {
    if (this.values.length > 0) {
      this.swap(this.values, 0, this.values.length - 1);
      const maxValue = this.values.pop();
      this.trickleDown(0);
      return maxValue;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap); // { values: [ 55, 39, 41, 18, 27, 12, 33 ] }
heap.extractMax()
console.log(heap); // { values: [ 41, 39, 33, 18, 27, 12 ] }
