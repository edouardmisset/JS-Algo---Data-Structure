"use strict";
// ! FIFO: First In First Out
exports.__esModule = true;
var SinglyLinkedLists_1 = require("../7_Singly_Linked_Lists/SinglyLinkedLists");
// Using an array
var q = [];
q.push(1);
q.push(2);
q.push(3);
console.log(q);
q.shift();
console.log(q);
// OR
var q2 = [];
q2.unshift(1);
q2.unshift(2);
q2.unshift(3);
console.log(q2);
q2.pop();
console.log(q2);
// Creating our own class
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new SinglyLinkedLists_1.ListNode(value);
        if (this.first && this.last) {
            this.last.next = newNode;
        }
        else {
            this.first = newNode;
        }
        this.last = newNode;
        return ++this.size;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first)
            return undefined;
        var removedNode = this.first;
        if (this.first === this.last)
            this.last = null;
        if (removedNode) {
            this.first = removedNode.next;
            removedNode.next = null;
            this.size--;
            return removedNode.value;
        }
    };
    return Queue;
}());
// Time Complexity:
// ! Insertion: O(1)
// ! Removal: O(1)
// Searching: O(N)
// Accessing: O(N)
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);
