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
  test.todo('Can successfully push multiple values onto a stack');
  test.todo('Can successfully pop off the stack');
  test.todo('Can successfully empty a stack after multiple pops');
  test.todo('Can successfully peek the next item on the stack');
  test.todo('Can successfully instantiate an empty stack');
  test.todo('Calling pop or peek on empty stack raises exception');

  });

describe('Queue Tests', () => {

  test('Can instantiate an empty queue', () => {
    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
  })
  test.todo('Can successfully enqueue into a queue');
  test.todo('Can successfully enqueue multiple values into a queue');
  test.todo('Can successfully dequeue out of a queue the expected value');
  test.todo('Can successfully peek into a queue, seeing the expected value');
  test.todo('Can successfully empty a queue after multiple dequeues');
  test.todo('Can successfully instantiate an empty queue');
  test.todo('Calling dequeue or peek on empty queue raises exception');

})
