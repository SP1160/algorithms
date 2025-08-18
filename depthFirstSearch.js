// 1
// Обойти граф в грубину

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D", "E"],
  D: ["B", "C", "E"],
  E: ["C", "D", "F"],
  F: ["E"],
};

const depthFirstSearch = (graph, start) => {
  const visited = {};
  const path = [];

  function dfs(node) {
    visited[node] = true;
    path.push(node);

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);

  return path;
};

console.log(depthFirstSearch(graph, "A"));

// 2
// Проверить наличие пути из точки А в точку Б

const havePath = (graph, start, end) => {
  const visited = {};
  let havePath = false;

  function dfs(node) {
    visited[node] = true;

    if (node === end) {
      havePath = true;
    }

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);

  return havePath;
};

console.log(havePath(graph, "A", "F"));

// 3
// Найти все пути от точки А до точки Б

const allPaths = (graph, start, end) => {
  const visited = {};
  const stack = [];
  const paths = [];

  function dfs(node) {
    visited[node] = true;
    stack.push(node);

    if (node === end) {
      paths.push([...stack]);
    }

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }

    stack.pop();
    visited[node] = false;
  }

  dfs(start);

  return paths;
};

console.log(allPaths(graph, "A", "F"));

// 4
// Найти самый длинный путь из точки А в точку Б

const longestPath = (graph, start, end) => {
  const visited = {};
  const stack = [];
  const paths = [];

  function dfs(node) {
    visited[node] = true;
    stack.push(node);

    if (node === end) {
      paths.push([...stack]);
    }

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }

    stack.pop();
    visited[node] = false;
  }

  dfs(start);

  if (!paths) return [];

  return paths.reduce((longest, path) => (path.length > longest.length ? path : longest));
};

console.log(longestPath(graph, "A", "F"));
