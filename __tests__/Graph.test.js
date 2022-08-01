'use strict';

const { Vertex, Edge, Graph } = require('../implementations/graphs/Graph')

describe('Graph Tests', () => {
  test.todp('Node can be successfully added to the graph');
  test.todp('An edge can be successfully added to the graph');
  test.todp('A collection of all nodes can be properly retrieved from the graph');
  test.todp('All appropriate neighbors can be retrieved from the graph');
  test.todp('Neighbors are returned with the weight between nodes included');
  test.todp('The proper size is returned, representing the number of nodes in the graph');
  test.todp('A graph with only one node and edge can be properly returned');
  test.todp('An empty graph properly returns null');
})