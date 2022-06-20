'use strict';

const LinkedList = require('../LinkedList');
const supertest = require('supertest');

describe('Linked List Tests', () => {

  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList;
    expect(linkedList).toEqual({});
  })

  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList;
    expect(linkedList.insert('insertTest')).toEqual('asdlfkj')
  })

  test.todo('The head property will properly point to the first node in the linked list')

  test.todo('Can properly insert multiple nodes into the linked list')

  test.todo('Will return true when finding a value within the linked list that exists')

  test.todo('Will return false when searching for a value in the linked list that does not exist')

  test.todo('Can properly return a collection of all the values that exist in the linked list')

})

