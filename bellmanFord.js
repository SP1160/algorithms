// Алгоритм Беллмана-Форда для поиска кратчайших путей
function bellmanFord(graph, start) {
  // получаем все вершины графа как массив ключей
  const vertices = Object.keys(graph);
  const numVertices = vertices.length;

  // объект для хранения кратчайших расстояний от стартовой вершины
  const distances = {};

  // Расстояние от стартовой вершины до самой себя равно 0
  // Все остальные расстояния изначально бесконечны
  for (let vertex of vertices) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }

  // Релаксация рёбер (V-1) раз
  for (let i = 0; i < numVertices - 1; i++) {
    // проверяем каждую вершину как потенциальную промежуточную
    for (let u of vertices) {
      // только если до u уже найден путь
      if (distances[u] !== Infinity) {
        // Итерируемся по соседям текущей вершины
        for (let v in graph[u]) {
          // получаем вес ребра u→v
          const weight = graph[u][v];

          // улучшится ли путь?
          if (distances[u] + weight < distances[v]) {
            // обновляем расстояние и запоминаем предшественника
            distances[v] = distances[u] + weight;
          }
        }
      }
    }
  }

  return distances;
}

const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

console.log(bellmanFord(graph, "a"));
