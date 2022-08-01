'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    const node = new Vertex(value);
    this.adjacencyList.set(node, []);
    return node;
  }

  addEdge(startVertex, endVertex) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex));
  }

  getNodes() {
    return [...this.adjacencyList];
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  size(){
    let numberOfNodes = [...this.adjacencyList].length;
    return numberOfNodes;
  }

  // **** traversals ****

  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (queue.length) {
      current = queue.pop();

      // do something if we want
      if (cb) cb(current.value);

      // grab neighbors?
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }

  depthFirst(root, cb) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();

      // do something if we want
      if (cb) cb(current.value);

      // grab neighbors?
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }

}

const graph = new Graph();

const A = graph.addNode('A');
const B = graph.addNode('B');
const D = graph.addNode('D');
const C = graph.addNode('C');
const E = graph.addNode('E');
const F = graph.addNode('F');
const G = graph.addNode('G');
const H = graph.addNode('H');

graph.addEdge(A, B);
graph.addEdge(A, D);
graph.addEdge(A, C);
graph.addEdge(B, G);
graph.addEdge(D, F);
graph.addEdge(D, H);
graph.addEdge(F, H);
graph.addEdge(C, H);
graph.addEdge(F, E);

// console.log(graph.adjacencyList);

// graph.depthFirst(A, console.log);

// console.log('************************');

// graph.breadthFirst(A, console.log);

console.log(graph.size());

module.exports = {
  Vertex,
  Edge,
  Graph
};
