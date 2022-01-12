/* Every parent must have at most 2 children
  Every node to the left is less than the parent
  Every node to the right is greater than the parent
*/

export class TreeNode {
  public value: number;
  public right: TreeNode | null;
  public left: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

export class BinarySearchTree {
  public root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  insert(value: number): this | undefined {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return undefined;
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  find(value: number): TreeNode | undefined | null {
    if (!this.root) return undefined;

    let currentNode: TreeNode | null = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        found = true;
      }
    }
    return found ? currentNode : undefined;
  }

  contains(value: number): boolean {
    return !!this.find(value);
  }

  // ! Traversal

  // Breadth-First Search
  BFS(): number[] {
    let node: undefined | TreeNode | null = this.root;
    const data: number[] = [];
    const queue: (TreeNode | null)[] = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      if (node) {
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return data;
  }

  // Depth-First Search
  DFSPreOrder(): number[] {
    const data: number[] = [];

    function traverse(node: TreeNode) {
      data.push(node.value);
      if (node?.left) traverse(node.left);
      if (node?.right) traverse(node.right);
    }

    if (this.root) traverse(this.root);
    return data;
  }

  DFSPostOrder(): number[] {
    const data: number[] = [];

    function traverse(node: TreeNode) {
      if (node?.left) traverse(node.left);
      if (node?.right) traverse(node.right);
      data.push(node.value);
    }

    if (this.root) traverse(this.root);
    return data;
  }

  DFSInOrder(): number[] {
    const data: number[] = [];

    function traverse(node: TreeNode) {
      node?.left && traverse(node.left);
      data.push(node.value);
      node?.right && traverse(node.right);
    }

    if (this.root) traverse(this.root);
    return data;
  }

}

// Time Complexity:
// Insertion: O(log N)
// Searching: O(log N)

const tree = new BinarySearchTree();
tree.root = new TreeNode(10);
tree.root.right = new TreeNode(15);
tree.root.left = new TreeNode(5);
tree.root.left.right = new TreeNode(9);

console.log(tree);
