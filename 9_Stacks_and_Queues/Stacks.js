"use strict";
// LIFO: Last In First Out
exports.__esModule = true;
// Using an array as a stack (using push and pop or shift and unshift)
var SinglyLinkedLists_1 = require("../7_Singly_Linked_Lists/SinglyLinkedLists");
// Creating our own Stack
var Stack = /** @class */ (function () {
    function Stack() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        var newNode = new SinglyLinkedLists_1.ListNode(value);
        if (this.first) {
            newNode.next = this.first;
        }
        else {
            this.last = newNode;
        }
        this.first = newNode;
        return ++this.size;
    };
    Stack.prototype.pop = function () {
        if (!this.first)
            return undefined;
        var removedNode = this.first;
        if (this.first === this.last)
            this.last = null;
        var newFirst = this.first.next;
        removedNode.next = null;
        this.first = newFirst;
        this.size--;
        return removedNode.value;
    };
    return Stack;
}());
var stack = new Stack();
stack.push('ONE');
stack.push('TWO');
stack.push('THREE');
console.log(stack.pop());
console.log(stack.pop());
