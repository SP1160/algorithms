// Найти кратчайший путь в графе между двумя точками

const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

const findNodeLowestCost = (costs, visited) => {
  let lowestCost = Infinity;
  let lowestNode;

  for (let node in costs) {
    const cost = costs[node];

    if (cost < lowestCost && !visited.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  }

  return lowestNode;
};

const dijkstra = (graph, start, end) => {
  const costs = {};
  const parents = {};
  const visited = [];
  let neighbors = {};

  for (let node in graph) {
    if (node !== start) {
      const value = graph[start][node];
      costs[node] = value || Infinity;
      parents[node] = value ? start : null;
    }
  }

  let node = findNodeLowestCost(costs, visited);

  while (node) {
    const cost = costs[node];
    neighbors = graph[node];

    for (let neighbor in neighbors) {
      const newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
        parents[neighbor] = node;
      }
    }

    visited.push(node);
    node = findNodeLowestCost(costs, visited);
  }

  const path = [end];
  let parent = parents[end];

  while (parent) {
    path.unshift(parent);
    parent = parents[parent];
  }

  return {
    distance: costs[end],
    allDistance: costs,
    path: path,
  };
};

console.log(dijkstra(graph, "a", "g"));
