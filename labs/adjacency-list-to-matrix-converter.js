function adjacencyListToMatrix(adjList) {
  const nodeCount = Object.keys(adjList).length;
  const matrix = Array.from({ length: nodeCount }, () =>
    Array(nodeCount).fill(0)
  );

  for (const [node, neighbors] of Object.entries(adjList)) {
    const i = Number(node);
    for (const neighbor of neighbors) {
      const j = Number(neighbor);
      if (i >= 0 && i < nodeCount && j >= 0 && j < nodeCount) {
        matrix[i][j] = 1;
      }
    }
  }

  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}
