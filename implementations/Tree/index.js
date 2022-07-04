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
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    const traverse = node => {
      if(node.left) traverse(node.left);
      results.push(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    const traverse = node => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
  
}

class BinarySearchTree extends BinaryTree {
  constructor () {
    super();
    this.root = null;
  }

  addNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }    
  }

  contains(value) {
    if (this.root.value === value) {
      return true;
    }
    let results = [];
    if (value < this.root.value) {
      const traverse = node => {
      if(node.left) traverse(node.left);
      results.push(node.value);
      if(node.right) traverse(node.right);
      };
      traverse(this.root);
    } else if (value > this.root.value) {
      const traverse = node => {
      if(node.left) traverse(node.left);
      results.push(node.value);
      if(node.right) traverse(node.right);
      };
      traverse(this.root);
      }
    if(results.includes(value)) {
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
console.log('contains 2: ', tree.contains(2));
console.log('contains 20: ', tree.contains(20));
console.log('contains 27: ', tree.contains(27));
console.log('contains 3: ', tree.contains(3));
tree.addNode(3);
console.log('contains 3: ', tree.contains(3));


module.exports = {
  K_aryNode,
  BinaryTree,
  BinarySearchTree,
};
