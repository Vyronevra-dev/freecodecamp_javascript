class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        // Connection goes both ways
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    print() {
        console.log(this.adjacencyList);
    }
}


// Create graph
const graph = new UndirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Add connections
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

// Display graph
console.log("Undirected Graph:");
graph.print();
