// 1
// Найти кратчайший путь между двуся вершинами

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D", "E"],
  D: ["B", "C", "E"],
  E: ["C", "D", "F"],
  F: ["E"],
};

const findPath = (graph, start, end) => {
  // graph - граф
  // start - начальная вершина
  // end - пункт назначения

  // инициализируем очередь
  const queue = [];
  // инициализируем объект для отслеживания посещенных вершин
  const visited = {};
  // добавляем start в очередь
  queue.push(start);
  // помечаем start как посещенную вершину во избежание повторного добавления в очередь
  visited[start] = true;

  while (queue.length > 0) {
    // Извлекаем первый путь из очереди
    const path = queue.shift();
    // Берем последнюю вершину из пути
    const current = path[path.length - 1];

    // проверяем, есть ли текущая вершина в графе
    if (!graph[current]) continue;

    // Если текущая вершина - конечная, возвращаем путь
    if (current === end) return path;

    // Перебираем соседей текущей вершины
    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        // Помечаем соседа как посещенного
        visited[neighbor] = true;
        // Создаем новый путь, добавляя соседа к текущему пути
        const newPath = [...path, neighbor];
        // Добавляем новый путь в очередь
        queue.push(newPath);
      }
    }
  }

  // Если путь не найден
  return null;
};

console.log(findPath(graph, "A", "F"));
console.log(findPath(graph, "A", "G"));

// 2
// Определить существует ли путь между двумя узлами в графе

const bfs = (graph, start, end) => {
  // graph - граф
  // start - начальная вершина
  // end - пункт назначения

  // инициализируем очередь
  const queue = [];
  // инициализируем объект для отслеживания посещенных вершин
  const visited = {};
  // добавляем start в очередь
  queue.push(start);
  // помечаем start как посещенную вершину во избежание повторного добавления в очередь
  visited[start] = true;

  while (queue.length > 0) {
    // удаляем первый (верхний) элемент из очереди
    const current = queue.shift();
    // проверяем, есть ли текущая вершина в графе
    if (!graph[current]) continue;
    // graph[current] - соседи current
    for (const neighbor of graph[current]) {
      // если сосед не посещался
      if (!visited[neighbor]) {
        // добавляем его в очередь
        queue.push(neighbor);
        // помечаем вершину как посещенную
        visited[neighbor] = true;
        // если сосед является пунктом назначения, мы победили
        if (neighbor === end) return true;
      }
    }
  }

  // если t не обнаружено, значит пункта назначения достичь невозможно
  return false;
};

console.log(bfs(graph, "A", "F"));
console.log(bfs(graph, "A", "G"));

// 2
// Поиск всех узлов на расстоянии n от начального узла в графе

const findNodesAtDistance = (graph, start, distance) => {
  if (distance === 0) {
    return [start];
  }

  const queue = [];
  const visited = {};
  let currentLevel = 0;

  queue.push(start);
  visited[start] = true;

  while (queue.length > 0 && currentLevel < distance) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (!graph[current]) continue;

      for (const neighbor of graph[current]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    currentLevel++;
  }

  return currentLevel === distance ? queue : [];
};

console.log(findNodesAtDistance(graph, "A", 1));
console.log(findNodesAtDistance(graph, "A", 2));
console.log(findNodesAtDistance(graph, "A", 3));

// 3
// Поиск всех путей между двумя узлами в графе

const findAllPaths = (graph, start, end) => {
  const queue = [];
  const paths = [];

  queue.push(start);

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentNode = currentPath[currentPath.length - 1];

    if (currentNode === end) {
      paths.push(currentPath);
    } else {
      for (const neighbor of graph[currentNode]) {
        // если текущая соседняя точка не находит в массиве пути, который мы достали из очереди (currentPath), то
        // в очередь добавляем массив из точек текущего пути + соседняя точка
        if (!currentPath.includes(neighbor)) {
          queue.push([...currentPath, neighbor]);
        }
      }
    }
  }

  return paths;
};

console.log(findAllPaths(graph, "A", "E"));
