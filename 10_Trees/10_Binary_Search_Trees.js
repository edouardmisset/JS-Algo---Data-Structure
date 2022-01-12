"use strict";
/* Every parent must have at most 2 children
  Every node to the left is less than the parent
  Every node to the right is greater than the parent
*/
exports.__esModule = true;
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
tree.root = new TreeNode(10);
tree.root.right = new TreeNode(15);
tree.root.left = new TreeNode(5);
tree.root.left.right = new TreeNode(9);
console.log(tree.root.left);
