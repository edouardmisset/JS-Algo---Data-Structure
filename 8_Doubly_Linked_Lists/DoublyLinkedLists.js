var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.value = value;
        this.next = null;
        this.previous = null;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoublyLinkedList.prototype.push = function (value) {
        var newTail = new ListNode(value);
        if (this.tail) {
            this.tail.next = newTail;
            newTail.previous = this.tail;
        }
        else {
            this.head = newTail;
        }
        this.tail = newTail;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.pop = function () {
        if (!this.length)
            return undefined;
        var oldTail = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            if (oldTail === null || oldTail === void 0 ? void 0 : oldTail.previous) {
                this.tail = oldTail.previous;
                this.tail.next = null;
                oldTail.previous = null;
            }
            this.length--;
            return oldTail === null ? undefined : oldTail;
        }
    };
    DoublyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var oldHead = this.head;
        var newHead = this.head.next;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            oldHead.next = null;
            if (newHead === null || newHead === void 0 ? void 0 : newHead.previous)
                newHead.previous = null;
            this.head = newHead;
        }
        this.length--;
        return oldHead;
    };
    DoublyLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        if (this.head) {
            this.head.previous = newNode;
            newNode.next = this.head;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return undefined;
        // Starting from the head
        var currentNode = this.head;
        if (index < this.length / 2) {
            for (var i = 0; i < index; i++) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) {
                    currentNode = currentNode.next;
                }
                else {
                    return undefined;
                }
            }
        }
        else {
            // Starting from the tail
            currentNode = this.tail;
            for (var i = index; i >= 0; i--) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.previous) {
                    currentNode = currentNode.previous;
                }
                else {
                    return undefined;
                }
            }
        }
        return currentNode;
    };
    DoublyLinkedList.prototype.set = function (value, index) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    };
    DoublyLinkedList.prototype.insert = function (value, index) {
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
            if (nextNode) {
                nextNode.previous = newNode;
            }
            previousNode.next = newNode;
            newNode.next = nextNode;
            newNode.previous = previousNode;
        }
        this.length++;
        return true;
    };
    DoublyLinkedList.prototype.remove = function (index) {
        // Edge cases : 
        if (index === this.length - 1)
            return this.pop();
        if (index === 0)
            return this.shift();
        if (index < 0 || index > this.length)
            return undefined;
        // get the node
        var nodeToRemove = this.get(index);
        if (nodeToRemove) {
            var previousNode = nodeToRemove.previous;
            var nextNode = nodeToRemove.next;
            if (nextNode)
                nextNode.previous = previousNode;
            if (previousNode)
                previousNode.next = nextNode;
            nodeToRemove.next = null;
            nodeToRemove.previous = null;
            this.length--;
            return nodeToRemove;
        }
        return undefined;
    };
    DoublyLinkedList.prototype.reverse = function () {
        var currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        var nextNode = null;
        for (var i = 0; i < this.length; i++) {
            if (currentNode) {
                nextNode = currentNode.next;
                currentNode.next = currentNode.previous;
                currentNode.previous = nextNode;
                currentNode = nextNode;
            }
        }
        return this;
    };
    return DoublyLinkedList;
}());
var list = new DoublyLinkedList();
var first = new ListNode(1);
var next = new ListNode(2);
first.next = next;
first.next.previous = first;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.shift();
list.unshift(1);
list.get(1);
list.set(99, 1);
list.insert(100, 2);
list.remove(2);
list.reverse();
console.log(list);
