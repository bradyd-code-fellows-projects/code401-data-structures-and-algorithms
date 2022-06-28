'use strict';

const { Node, Stack } = require('./stackAndQueue');

class PseudoQueue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(value) {
    if (this.inputStack.top === null && this.outputStack.top === null) {
      let newNode = new Node(value);
      this.outputStack.push(newNode);
    } else if (this.inputStack.top !== null && this.outputStack.top === null) {
      let newNode = new Node(value);
      this.outputStack.push(newNode);
    } else if (this.inputStack.top === null && this.outputStack.top !== null) {
      while(this.outputStack) {
        this.inputStack.push(this.outputStack.pop());
      }      
      let newNode = new Node(value);
      this.inputStack.push(newNode);
    }
  }

  dequeue() {
    if (this.inputStack.top === null && this.outputStack.top === null) {
      console.log('Both stacks are empty, there are no nodes to dequeue')
      return;
    }
    if (this.inputStack.top !== null && this.outputStack.top === null) {
      while(this.inputStack) {
        let popped = this.inputStack.top.pop();
        this.outputStack.push(popped);
      }
    }
    if (this.inputStack.top === null && this.outputStack.top !== null) {
      this.outputStack.top.pop();
      return;
    }
    this.outputStack.top.pop();
  }

}

let pseudoQueue1 = new PseudoQueue();

// pseudoQueue1.enqueue('a');
// pseudoQueue1.enqueue('b');
// pseudoQueue1.enqueue('c');
console.log('PseudoQueue1: ', pseudoQueue1);

module.exports = PseudoQueue;