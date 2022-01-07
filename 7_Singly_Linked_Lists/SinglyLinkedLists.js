// Piece of data - value
// Reference to the next node - next
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    SinglyLinkedList.prototype.push = function (value) {
        var newNode = new ListNode(value);
        if (this.head && this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        var currentNode = this.head;
        var previousNode = currentNode;
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
    };
    SinglyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var currentHead = this.head;
        var newHead = this.head.next;
        currentHead.next = null;
        this.head = newHead;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return currentHead;
    };
    SinglyLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        if (this.head) {
            newNode.next = this.head;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    };
    // public get value() : string {
    //   return
    // }
    SinglyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return undefined;
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) {
                currentNode = currentNode.next;
            }
            else {
                return undefined;
            }
        }
        return currentNode;
    };
    SinglyLinkedList.prototype.set = function (value, index) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    };
    SinglyLinkedList.prototype.insert = function (value, index) {
        if (index === this.length)
            return !!this.push(value);
        if (index === 0)
            return !!this.unshift(value);
        if (index < 0 || index > this.length)
            return false;
        var newNode = new ListNode(value);
        var previousNode = this.get(index - 1);
        if (previousNode) {
            var nextNode = previousNode.next;
            previousNode.next = newNode;
            newNode.next = nextNode;
        }
        this.length++;
        return true;
    };
    SinglyLinkedList.prototype.remove = function (index) {
        if (index === this.length - 1)
            return this.pop();
        if (index === 0)
            return this.shift();
        if (index < 0 || index > this.length)
            return undefined;
        var previousNode = this.get(index - 1);
        if (previousNode) {
            var nodeToRemove = previousNode.next;
            if (nodeToRemove) {
                previousNode.next = nodeToRemove.next;
                nodeToRemove.next = null; // Is it necessary ?
                // Is it a problem to have two nodes pointing to a single node ?
            }
            return nodeToRemove;
        }
        this.length--;
        return undefined;
    };
    SinglyLinkedList.prototype.reverse = function () {
        var currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        var previousNode = null;
        var nextNode = null;
        for (var i = 0; i < this.length; i++) {
            if (currentNode) {
                nextNode = currentNode.next;
                currentNode.next = previousNode;
                previousNode = currentNode;
                currentNode = nextNode;
            }
        }
        return this;
    };
    return SinglyLinkedList;
}());
// const list = new SinglyLinkedList();
// list.push('HELLO');
// list.push('Goodbye');
// list.reverse();
// console.log(list);
