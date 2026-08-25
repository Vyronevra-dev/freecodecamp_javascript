class Directed:Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(from, to) {
        // Connection only goes in one direction
        this.adjacencyList[from].push(to);
    }

    print() {
        console.log(this.adjacencyList);
    }
}


// Create graph
const graph = new DirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

// Add directed connections
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

// Display graph
console.log("Directed Graph:");
graph.print();
