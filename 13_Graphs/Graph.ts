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

  depthFirstSearchRecursive(startingVertex = 'A'): undefined | string[] {
    const result: string[] = [];
    const visited: any = {};

    const DFSHelper = (vertex: string) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor: string) =>
        !visited[neighbor] ? DFSHelper(neighbor) : undefined
      );
    };
    DFSHelper(startingVertex);

    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph.adjacencyList);

console.log(graph.depthFirstSearchRecursive('A'));
