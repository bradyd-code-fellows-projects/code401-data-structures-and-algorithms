'use strict';

const { LinkedList, Node, zipLists } = require('../implementations/linked-list/LinkedList');

let linkedList = new LinkedList();

describe('Linked List Tests', () => {

  test('Can successfully instantiate an empty linked list', () => {
    expect(linkedList.head).toBeNull();
  })

  test('Can properly insert into the linked list', () => {
    linkedList.insertAtHead(2);
    linkedList.insertAtHead('a');
    linkedList.insertAtHead('banana');
    expect(linkedList.head.value).toEqual('banana');
    expect(linkedList.head.next.value).toEqual('a');
    expect(linkedList.head.next.next.value).toEqual(2);
    expect(linkedList.head.next.next.next).toBeNull();
  })

  test('The head property will properly point to the first node in the linked list', () => {
    expect(linkedList.head.value).toEqual('banana');
  })

  test('Can properly insert multiple nodes into the linked list', () => {
    linkedList.insertAtHead('monkeyparty');
    linkedList.insertAtHead('flimflam');
    linkedList.insertAtHead('foobar');
    expect(linkedList.head.value).toEqual('foobar');
  })

  test('Will return true when finding a value within the linked list that exists', () => {
    let result = linkedList.includes('monkeyparty');
    let anotherResult = linkedList.includes('flimflam');
    expect(result).toBeTruthy();
    expect(anotherResult).toBeTruthy();
  })

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let result = linkedList.includes('eggplant parm')
    let anotherResult = linkedList.includes('worcestershire');
    expect(result).toBeFalsy();
    expect(anotherResult).toBeFalsy();
  })

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let result = linkedList.toString();
    let expected = '{ foobar } -> { flimflam } -> { monkeyparty } -> { banana } -> { a } -> { 2 } -> NULL'
    expect(result).toEqual(expected);
  })

  test('Can properly return value and node k-th from end of list', () => {
    let result = linkedList.kthFromEnd(3);
    expect(result).toEqual('banana');
    let result2 = linkedList.kthFromEnd(4);
    expect(result2).toEqual('monkeyparty');
    let result3 = console.log(linkedList.kthFromEnd(77));
    expect(result3).toBeFalsy();
  })

  test('Can zip two lists together', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.head = new Node(1);
    list2.head = new Node(2);
    list1.head.next = new Node(3);
    list2.head.next = new Node(4);
    let result = zipLists(list1, list2);
    let stringified = result.toString();
    let expected = '{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL'
    console.log(result);
    expect(stringified).toEqual(expected);
  })

})

