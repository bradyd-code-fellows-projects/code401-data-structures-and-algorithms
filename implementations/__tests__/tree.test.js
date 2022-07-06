'use strict';

const {
  Node,
  K_aryNode,
  BinaryTree,
  BinarySearchTree,
  breadthFirst } = require('../Tree/index');

describe('Tree class tests', () => {

  test('Can instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  let tree = new BinaryTree();

  test('Can successfully instantiate a tree with a single root node', () => {
    tree.root = new Node(2);
    expect(tree.root.value).toEqual(2);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left).toBeNull();
  });

  test('Can successfully return a collection from a preorder traversal', () => {
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(20);
    let preOrdered = tree.preOrder();
    expect(preOrdered).toEqual([2, 5, 1, 8, 15, 20]);
    expect(preOrdered).not.toEqual([1, 5, 8, 10, 15, 20]);
  });

  test('Can successfully return a collection from an inorder traversal', () => {
    let inOrdered = tree.inOrder();
    expect(inOrdered).toEqual([1, 5, 8, 2, 15, 20]);
    expect(inOrdered).not.toEqual([10, 5, 1, 8, 15, 20]);
  });

  test('Can successfully return a collection from an postorder traversal', () => {
    let postOrdered = tree.postOrder();
    expect(postOrdered).toEqual([1, 8, 5, 20, 15, 2]);
    expect(postOrdered).not.toEqual([1, 5, 8, 10, 15, 20]);
  });

})

describe('Binary Search Tree tests', () => {
  let bst = new BinarySearchTree();
  test('Can successfully add a left child and right child properly to a node', () => {
    bst.root = new Node(2);
    bst.addNode(1);
    bst.addNode(3);
    expect(bst.root.left.value).toEqual(1);
    expect(bst.root.right.value).toEqual(3);
  });

  test('Correctly identifies if node value exists in a given tree', () => {
    expect(bst.contains(1)).toBeTruthy();
    expect(bst.contains(3)).toBeTruthy();
    expect(bst.contains(1324798745309)).toBeFalsy();
  });

  test('Can return max value of a tree', () => {
    bst.addNode(7);
    bst.addNode(13);
    bst.addNode(29);
    expect(bst.treeMax()).not.toEqual(1);
    expect(bst.treeMax()).not.toEqual(7);
    expect(bst.treeMax()).not.toEqual(13);
    expect(bst.treeMax()).toEqual(29);
  });

  test('Can return list of values in order they were encountered during breadth-first traversal', () => {
    let tree1 = new BinarySearchTree();
    tree1.root = new Node(2);
    tree1.root.left = new Node(7);
    tree1.root.right = new Node(5);
    tree1.root.left.left = new Node(2);
    tree1.root.left.right = new Node(6);
    tree1.root.right.right = new Node(9);
    tree1.root.right.right.left = new Node(4);
    tree1.root.left.right.left = new Node(5);
    tree1.root.left.right.right = new Node(11);
    let results = breadthFirst(tree1);
    expect(results).toEqual([2, 7,  5, 2, 6, 9, 5, 11, 4]);
  })

})