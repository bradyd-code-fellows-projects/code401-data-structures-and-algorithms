'use strict';

const PseudoQueue = require('../PseudoQueue');

const pseudo1 = new PseudoQueue();

describe('PseudoQueue Tests', () => {
  test('Can instantiate an empty PseudoQueue', () => {
    expect(pseudo1.inputStack.top).toBeNull();
    expect(pseudo1.outputStack.top).toBeNull();
  })
  test.todo('PseudoQueue can enqueue a node');
  test.todo('Pseudoqueue can dequeue a node');
})