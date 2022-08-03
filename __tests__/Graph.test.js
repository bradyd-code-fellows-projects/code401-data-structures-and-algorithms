'use strict';

const { Vertex, Edge, Graph } = require('../implementations/graphs/Graph');

let graph = new Graph();
let a = graph.addNode('a');
let b = graph.addNode('b');

describe('Graph Tests', () => {
  test('Node can be successfully added to the graph', () => {
    expect(a).toBeTruthy();
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addEdge(a, b);
    console.log(graph.adjacencyList);
    expect(graph).toEqual();
  });

  test.todo('A collection of all nodes can be properly retrieved from the graph');
  test.todo('All appropriate neighbors can be retrieved from the graph');
  test.todo('Neighbors are returned with the weight between nodes included');
  test.todo('The proper size is returned, representing the number of nodes in the graph');
  test.todo('A graph with only one node and edge can be properly returned');
  test.todo('An empty graph properly returns null');
})