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

  depthFirstSearchRecursive(startingVertex = 'A'): string[] {
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

  depthFirstSearchIterative(startingVertex = 'A'): string[] {
    const stack = [startingVertex]
    const result: string[] = []
    const visited: any = { startingVertex: true }
    let currentVertex: string | undefined

    while (stack.length > 0) {
      currentVertex = stack.pop()
      if (currentVertex && !visited[currentVertex]) {
        result.push(currentVertex)
        visited[currentVertex] = true
        this.adjacencyList[currentVertex].forEach((neighbor: string): number => stack.push(neighbor)
        );
      }
    }
    return result
  }

  breadthFirstSearch(startingVertex = 'A'): string[] {
    const queue = [startingVertex]
    const result: string[] = []
    const visited: any = { startingVertex: true }
    let currentVertex: string | undefined

    while (queue.length > 0) {
      currentVertex = queue.shift()
      if (currentVertex) {
        result.push(currentVertex)
        visited[currentVertex] = true

        this.adjacencyList[currentVertex].forEach((neighbor: string): void => {
          if (!visited[neighbor]) {
            queue.push(neighbor)
            visited[neighbor] = true
          }
        }
        );
      }
    }
    return result
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
console.log(graph.depthFirstSearchIterative('A'));
console.log(graph.breadthFirstSearch('A'));
