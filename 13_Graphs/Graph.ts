// Adjacency List
// {
//   "a": ["b", "c"],
//   "b": ["a", "c"],
//   "c": ["a", "b"]
// }

// Undirected graph
class Graph {
  public adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name: string): void {
    // TODO: Should check if the vertex already exists and return a warning | Error handling
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1: string, vertex2: string): void {
    // TODO Error handling
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string): void {
    // TODO Error handling
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex: string): boolean => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex: string): boolean => vertex !== vertex1
    );
  }

  removeVertex(vertex: string): void {
    this.adjacencyList[vertex].forEach((edge: string): void =>
      this.removeEdge(edge, vertex)
    );
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addVertex('Los Angeles');
graph.addVertex('Hong Kong');
console.log(graph.adjacencyList);

graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Tokyo', 'Aspen');
graph.addEdge('Dallas', 'Los Angeles');
graph.addEdge('Dallas', 'Hong Kong');
console.log(graph.adjacencyList);
graph.removeEdge('Dallas', 'Aspen');
graph.removeVertex('Dallas');

console.log(graph.adjacencyList);
