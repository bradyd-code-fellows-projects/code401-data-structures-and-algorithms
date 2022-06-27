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

  }

  peek() {

  }

  isEmpty() {

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
  Stack,
  Queue,
};
