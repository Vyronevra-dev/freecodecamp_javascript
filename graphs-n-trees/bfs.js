/* Breadth-First Search (BFS) uses a Queue.
 * BFS explores the graph one level at a time.
 *      A
       / \
      B   C
      |   |
      D   E
       \ /
        F

	*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set();
        const result = [];

        visited.add(start);

        while (queue.length > 0) {
            const current = queue.shift();

            result.push(current);

            for (const neighbor of this.adjacencyList[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}


// Create graph

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");


// Run BFS

const result = graph.bfs("A");

console.log("BFS traversal:");
console.log(result);
