'use strict';

const { Node } = require('./LinkedList');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let node = this.top;
    if (node === null) {
      return null;
    }
    this.top = node.next;
    return node;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    if (this.front === null && this.back === null) {
      return null;
    }
    let pointer = null;
    if (this.front) {
      pointer = this.front;
      if (!pointer.next) {
        this.back = null;
      }
      this.front = this.front.next;
      return pointer.value;
    } else {
      return null;
    }

  }

  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.front === null;
  }

}

// let stack = new Stack();
// stack.push(2);
// console.log(stack);

module.exports = {
  Stack,
  Queue,
};
