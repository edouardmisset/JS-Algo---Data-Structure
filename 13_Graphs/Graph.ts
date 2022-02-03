// Adjacency List
// {
//   "a": ["b", "c"],
//   "b": ["a", "c"],
//   "c": ["a", "b"]
// }

// Undirected graph
// Unweighted graph
class Graph {
  public adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }

  public addVertex(vertex: string): void {
    // TODO: Should check if the vertex already exists and return a warning | Error handling
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  public addEdge(vertex1: string, vertex2: string): void {
    // TODO Error handling
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  public removeEdge(vertex1: string, vertex2: string): void {
    // TODO Error handling
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex: string): boolean => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex: string): boolean => vertex !== vertex1
    );
  }

  public removeVertex(vertex: string): void {
    this.adjacencyList[vertex].forEach((edge: string): void =>
      this.removeEdge(edge, vertex)
    );
    delete this.adjacencyList[vertex];
  }

  public depthFirstSearchRecursive(startingVertex = 'A'): string[] {
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

  public depthFirstSearchIterative(startingVertex = 'A'): string[] {
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

  public breadthFirstSearch(startingVertex = 'A'): string[] {
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

// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');
// graph.addEdge('D', 'F');
// graph.addEdge('E', 'F');
// console.log(graph.adjacencyList);

// console.log(graph.depthFirstSearchRecursive('A'));
// console.log(graph.depthFirstSearchIterative('A'));
// console.log(graph.breadthFirstSearch('A'));


/**
 * 
 * 
 *  
*/

import { PriorityQueue } from "../11_Binary_Heaps/PriorityQueue.ts";

class WeightedGraph {
  public adjacencyList: any;
  constructor() {
    this.adjacencyList = {};
  }
  public addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  public addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  public shortestPath(start: string, finish: string) {
    // Initialization: creating a priority queue, a previous object (to trace the path)
    // and a distances object to track the shortest distances between two vertices
    const nodes = new PriorityQueue()
    const distances: any = {}
    const previous: any = {}
    const path = []
    let smallest
    // Build the initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    // The meat
    while (nodes.values.length) {
      smallest = nodes.dequeue()?.value
      if (smallest) {
        if (smallest === finish) {
          // We are done and need to build the path to return
          // console.log({ distances, previous });
          while (previous[smallest]) {
            path.push(smallest)
            smallest = previous[smallest]
          }
          break
        }
        if (smallest || distances[smallest] !== Infinity) {
          for (const neighbor in this.adjacencyList[smallest]) {
            // Find neighboring node
            const nextNode = this.adjacencyList[smallest][neighbor]
            // Calculate the new distance to neighboring node
            const candidate = distances[smallest] + nextNode.weight
            const nextNeighbor = nextNode.node;
            if (candidate < distances[nextNeighbor]) {
              // updating the new smallest distance to neighbor
              distances[nextNeighbor] = candidate
              // updating the previous - How to get to the neighbor
              previous[nextNeighbor] = smallest
              // enqueuing in priority queue with new priority
              nodes.enqueue(nextNeighbor, candidate)
            }
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

// class BasicPriorityQueue {
//   public values: { value: string, priority: number }[]
//   constructor() {
//     this.values = []
//   }
//   public enqueue(value: string, priority: number) {
//     this.values.push({ value, priority })
//     this.sort()
//   }
//   public dequeue() {
//     return this.values.shift()
//   }
//   private sort() {
//     this.values.sort((a, b) => a.priority - b.priority)
//   }
// }

const weightedGraph = new WeightedGraph()
weightedGraph.addVertex("A")
weightedGraph.addVertex("B")
weightedGraph.addVertex("C")
weightedGraph.addVertex("D")
weightedGraph.addVertex("E")
weightedGraph.addVertex("F")
weightedGraph.addEdge("A", "B", 4)
weightedGraph.addEdge("A", "C", 2)
weightedGraph.addEdge("B", "E", 3)
weightedGraph.addEdge("C", "D", 2)
weightedGraph.addEdge("C", "F", 4)
weightedGraph.addEdge("D", "F", 1)
weightedGraph.addEdge("D", "E", 3)
weightedGraph.addEdge("F", "E", 1)

console.log(weightedGraph.adjacencyList)
// this.adjacencyList {
// A: [ { node: "B", weight: 4 }, { node: "C", weight: 2 } ],
// B: [ { node: "A", weight: 4 }, { node: "E", weight: 3 } ],
// C: [ { node: "A", weight: 2 }, { node: "D", weight: 2 }, { node: "F", weight: 4 } ],
// D: [ { node: "C", weight: 2 }, { node: "F", weight: 1 }, { node: "E", weight: 3 } ],
// E: [ { node: "B", weight: 3 }, { node: "D", weight: 3 }, { node: "F", weight: 1 } ],
// F: [ { node: "C", weight: 4 }, { node: "D", weight: 1 }, { node: "E", weight: 1 } ]
// }

console.log(weightedGraph.shortestPath("A", "E"))
// [ "A", "C", "D", "F", "E" ]