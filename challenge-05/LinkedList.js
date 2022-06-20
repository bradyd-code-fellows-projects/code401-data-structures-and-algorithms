'use strict';

const { link } = require('fs');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  add(value) {

    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
    console.log('done traversing');
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    console.log(linkedList.head)
  }

  includes(value) {
    let current = this.head;
    let result = false;
    while (current) {
      if (current.value === value) {
        result = true;
        return result;
      } else if (current.value !== value) {
        current = current.next;
      }
    }
    return result;
  }

  toString() {
    let current = this.head;
    let str;
    while (current) {
      str += `{${current.value}} -> `;
      current = current.next;
      if (!current) {
        str += 'NULL'
      }
    }
    let resultStr = str.slice(9, (str.length));
    console.log(resultStr);
  }

  toString() {
    let current = this.head;
    let str;
    while (current) {
      str += `{${current.value}} -> `;
      current = current.next;
      if (!current) {
        str += 'NULL'
      }
    }
    let resultStr = str.slice(9, (str.length));
    console.log(resultStr);
  }

}

module.exports = { Node, LinkedList };
