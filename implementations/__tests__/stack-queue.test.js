'use strict';

const { Stack, Queue } = require('../stackAndQueue');

let testStack = new Stack();
let testQueue = new Queue();

describe('Stack Tests', () => {

  test('Can instantiate an empty Stack', () => {
    expect(testStack.top).toBeNull();
  });

  test('Can successfully push onto a stack', () => {
    testStack.push(2);
    expect(testStack.top.value).toEqual(2);
  });

  test('Can successfully push multiple values onto a stack', () => {
    testStack.push(3);
    testStack.push(4);
    testStack.push(5);
    expect(testStack.top.value).toEqual(5);
    expect(testStack.top.next.value).toEqual(4);
    expect(testStack.top.next.next.value).toEqual(3);
  });

  test('Can successfully pop off the stack', () => {
    testStack.pop();
    expect(testStack.top.value).toEqual(4);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    testStack.pop();
    testStack.pop();
    testStack.pop();
    expect(testStack.top).toBeNull();
  });

  test('Can successfully peek the next item on the stack', () => {
    testStack.push('a');
    let peeked = testStack.peek();
    expect(peeked).toEqual('a');
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    testStack.pop();
    let nullPop = testStack.pop();
    expect(nullPop).toEqual(null);
    let nullPeek = testStack.peek();
    expect(nullPeek).toEqual(null);
  });

  });

describe('Queue Tests', () => {

  test('Can instantiate an empty queue', () => {
    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
  });

  test('Can successfully enqueue into a queue', () => {
    testQueue.enqueue(1);
    expect(testQueue.front.value).toEqual(1);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    expect(testQueue.front.value).toEqual(1);
    expect(testQueue.back.value).toEqual(4);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    testQueue.dequeue();
    expect(testQueue.front.value).toEqual(2);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let peeked = testQueue.peek();
    expect(peeked).toEqual(2)
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.isEmpty).toBeTruthy();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    expect(testQueue.dequeue()).toBeNull();
    expect(testQueue.peek()).toBeNull();
  });

})
