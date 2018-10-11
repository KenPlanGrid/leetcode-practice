/**
 * Initialize your data structure here.
 */
const Node = function(val, next) {
    this.val = val;
    this.next = next;
}

var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
    this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.length - 1) return -1;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
    }

    return currentNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node (val);
    if (this.head) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }
    this.length += 1;

};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }
    this.length += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        return this.addAtHead(val);
    }

    if (this.length < index) {
        return;
    }

    const newNode = new Node(val);
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex += 1;
    }
    if (index === this.length) {
        this.tail = newNode;
    }

    let nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    this.length += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length) {
        return;
    }

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex += 1;
    }
    if (index === this.length - 1) {
        this.tail = previousNode;
    }
    let nextNode = currentNode.next;
    previousNode.next = currentNode.next;
    this.length -= 1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
