'use strict';

const { Queue } = require('../stack-queue/stackAndQueue');

// Challenge 15 - K_aryNode, Binary Tree, Binary Search Tree
// Challenge 16 - Tree Max
// Challenge 17 - Breadth First Traversal

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

  treeMax() {
    let treeValues = [];
    const traverse = node => {
      treeValues.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    let max = 0;
    treeValues.forEach(value => {
      if (value > max) {
        max = value;
      }
      return max;
    })
    return max;
  }

}

function breadthFirst(tree) {
  let queue = new Queue();
  let results = [];
  let current = tree.root;
  queue.enqueue(current);
  while (!queue.isEmpty()) {
    current = queue.dequeue();
    results.push(current.value);
    if (current.left) {
      queue.enqueue(current.left);
    }
    if (current.right) {
      queue.enqueue(current.right);
    }
  }
  return results;
}

function fizzBuzz(tree) {
  if (tree.root === null) {
    return 'Empty tree';
  }
  const traverse = node => {
    if (node.value % 3 !== 0 && node.value % 5 !== 0) {
      node.value = node.value.toString();
    } else if (node.value % 3 === 0 && node.value % 5 !== 0) {
      node.value = "Fizz";
    } else if (node.value % 3 !== 0 && node.value % 5 === 0) {
      node.value = "Buzz";
    } else if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = "FizzBuzz";
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(tree.root);
  return tree;
}

// let tree1 = new BinaryTree();

// tree1.root = new Node(1);
// tree1.root.left = new Node(12);
// tree1.root.right = new Node(30);
// tree1.root.left.left = new Node(15);
// tree1.root.right.left = new Node(20);
// tree1.root.right.right = new Node(34);
// tree1.root.right.left.right = new Node(75);

// console.log(tree1);
// let tree2 = fizzBuzz(tree1);
// console.log(tree2.root.value);
// console.log(tree2.root.left.value);
// console.log(tree2.root.right.value);
// console.log(tree2.root.left.left.value);
// console.log(tree2.root.right.left.value);
// console.log(tree2.root.right.right.value);
// console.log(tree2.root.right.left.right.value);

// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(20);

// let preOrder = tree.preOrder();
// let inOrder = tree.inOrder();
// let postOrder = tree.postOrder();

// console.log('preOrder:', preOrder);
// console.log('inOrder:', inOrder);
// console.log('postOrder:', postOrder);

// console.log('contains 10: ', tree.contains(10));
// console.log('contains 1: ', tree.contains(1));
// console.log('contains 3: ', tree.contains(3));
// tree.addNode(3);
// console.log('contains 69: ', tree.contains(69));
// // tree.addNode(69);
// console.log('contains 69: ', tree.contains(69));
// console.log('contains 77: ', tree.contains(77));
// // tree.addNode(77);
// console.log('contains 77: ', tree.contains(77));
// console.log(tree.treeMax());


module.exports = {
  Node,
  K_aryNode,
  BinaryTree,
  BinarySearchTree,
  breadthFirst,
  fizzBuzz,
};
