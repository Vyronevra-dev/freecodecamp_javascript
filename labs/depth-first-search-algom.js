function dfs(graph, root) {
  const n = graph.length;
  if (root < 0 || root >= n) return [];

  const visited = new Set();
  const stack = [root];
  const reachable = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (visited.has(current)) continue;

    visited.add(current);
    reachable.push(current);

    // Push neighbors onto the stack so unvisited edges are explored
    for (let neighbor = n - 1; neighbor >= 0; neighbor--) {
      if (graph[current][neighbor] === 1 && !visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return reachable;
}
