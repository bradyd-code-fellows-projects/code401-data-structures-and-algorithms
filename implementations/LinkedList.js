'use strict';

// Challenge 06: append(value), insertBefore(value, newValue), insertAfter(value, newValue)
// Challenge 07: kthFromEnd(k)
// Challenge 08: zipLists(list1, list2)

const { link } = require('fs');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  append(value) {

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

  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
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
      str += `{ ${current.value} } -> `;
      current = current.next;
      if (!current) {
        str += 'NULL'
      }
    }
    let resultStr = str.slice(9, (str.length));
    return resultStr;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let previous;
    if (current.value === 0) {
      node.next = current;
      this.head = node;
    } else {
      let i = 0;
      while (i++ < value) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    console.log(linkedList);
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while(current) {
      if (current.value === value) {
        next.value = newValue;
        newValue.next = current.next;
        next.next++;
      } else {
        current = current.next;
      }
      return;
    }
  }

  // use tortoise and hare concept: 2 pointers moving at different pace, hare is k paces ahead of tortoise
  
  kthFromEnd(k) {
    let tortoise = this.head;
    let hare = this.head;
    for (let i = 0; i < k - 1; i++) {
      if (!hare) {
        console.log('k is greater than the length of the linked list');
        return;
      }
      hare = hare.next;
    }
    if (!hare) {
      console.log('k is the size of the linked list');
      return;
    }
    while(hare.next) {
      tortoise = tortoise.next;
      hare = hare.next;
    }
    return tortoise.value;
  }

}

let zipLists = (list1, list2) => {
  let zippedLists = new LinkedList;
  list1.current = list1.head;
  list2.current = list2.head;
  zippedLists.head = list1.current;
  zippedLists.current = zippedLists.head;
  while (list1.next) {
    let next1 = 
    zippedLists.next = list2.current;

  }
  return ('zippedLists: ', zippedLists);
}

let linkedList = new LinkedList();

linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');
linkedList.append('e');
linkedList.append('f');

// console.log(linkedList);

linkedList.kthFromEnd(6);

// linkedList.toString();

module.exports = {
  LinkedList,
  Node,
};

