'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class K_aryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
    // this.children = new Array(k).fill(null); ** not required ** 
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // ** traversals ** 

  preOrder() {
    let results = [];
    const traverse = node => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  addNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    if (this.root.value === value) {
      return true;
    }
    let results = [];
    if (value < this.root.value) {
      const traverse = node => {
        if (node.left) traverse(node.left);
        results.push(node.value);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
    } else if (value > this.root.value) {
      const traverse = node => {
        if (node.left) traverse(node.left);
        results.push(node.value);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
    }
    if (results.includes(value)) {
      return true;
    }
    return false;
  }

}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();

console.log('preOrder:', preOrder);
console.log('inOrder:', inOrder);
console.log('postOrder:', postOrder);

console.log('contains 10: ', tree.contains(10));
console.log('contains 1: ', tree.contains(1));
console.log('contains 3: ', tree.contains(3));
tree.addNode(3);
console.log('contains 69: ', tree.contains(69));
tree.addNode(69);
console.log('contains 69: ', tree.contains(69));
console.log('contains 77: ', tree.contains(77));
tree.addNode(77);
console.log('contains 77: ', tree.contains(77));


module.exports = {
  K_aryNode,
  BinaryTree,
  BinarySearchTree,
};
