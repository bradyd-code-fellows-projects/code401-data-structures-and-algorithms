'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let node = this.top;
    this.top = node.next;
    return node;
  }

  peek() {
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

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {

  }

  peek() {

  }

  isEmpty() {

  }

}

// let stack = new Stack();
// stack.push(2);
// console.log(stack);

module.exports = {
  Node,
  Stack,
  Queue,
};
