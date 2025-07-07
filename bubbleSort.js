// 1
// Отсортировать массив по возростанию

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // с помощью "- i" мы пропускаем итерации по элементам, которые отсортированы
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([6, 5, 1, 3, 9, 4, -1, 0, -30]));

// 2
// Отсортировать массив объектов по свойству

const bubbleSortByKey = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j][key] > arr[j + 1][key]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const arr = [
  {
    age: 30,
  },
  {
    age: 18,
  },
  {
    age: 20,
  },
  {
    age: 44,
  },
  {
    age: 19,
  },
];

console.log(bubbleSortByKey(arr, "age"));

// 3
// Отсортировать массив строк по возростанию длины строки

const bubbleSortByStringLength = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const strsArr = ["123", "12345", "1", "12", "1234"];
console.log(bubbleSortByStringLength(strsArr));

// 4
// Найти второй наибольший элемент в массиве, иначе самый наибольший в массиве

const bubbleSearchSecondBigElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let count = 0;
  let prev = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      count++;
      prev = arr[i];
      if (count === 2) {
        return arr[i];
      }
    }
  }

  return arr[0];
};

console.log(bubbleSearchSecondBigElement([1, 3, 4, 2, 2]));
console.log(bubbleSearchSecondBigElement([1]));

// 5
// Школа пытается сделать ежегодное фото всех учеников. Учеников просят встать в одну шеренгу в порядке неубывания роста.
// Пусть этот порядок представлен массивом expected, где expected[i] — это ожидаемый рост ученика на позиции i в шеренге (индексация начинается с 0).
// Вам дан массив heights, представляющий текущий порядок, в котором стоят ученики.
// Каждый элемент heights[i] — это рост ученика на позиции i в шеренге.
// Необходимо вернуть количество индексов, для которых heights[i] != expected[i].

const heightChecker = (heights) => {
  const expected = [...heights];
  for (let i = 0; i < expected.length; i++) {
    for (let j = 0; j < expected.length - 1 - i; j++) {
      if (expected[j] > expected[j + 1]) {
        const temp = expected[j];
        expected[j] = expected[j + 1];
        expected[j + 1] = temp;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) count++;
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));

// 6
// Новый смертельный вирус заразил большое население планеты. Блестящий ученый обнаружил новый штамм вируса, который может вылечить эту болезнь.
// Вакцина, произведенная из этого вируса, имеет разную силу в зависимости от количества мидихлорианов.
// Человек излечивается только в том случае, если количество мидихлорианов в партии вакцины больше, чем количество мидихлорианов у человека.
// Врач получает новый набор отчетов, содержащих количество мидихлорианов у каждого зараженного пациента.
// В хранилище Practo находятся все вакцины, которые есть у врача, и их количество мидихлорианов.
// Необходимо определить, может ли врач вылечить всех пациентов имеющимися у него вакцинами. Количество вакцин и пациентов одинаково.

// Формат ввода
// Первый параметр содержит количество вакцин — N.
// Второй параметр содержит N целых чисел — силу вакцин (количество мидихлорианов).
// Третий параметр содержит N целых чисел — количество мидихлорианов у пациентов.

// Формат вывода
// Выведите: true, если всех пациентов можно вылечить, и false в противном случае.

// Ограничения
// 1 ≤ N ≤ 10
// Сила вакцин и количество мидихлорианов у пациентов помещаются в тип int.

const savePatients = (n, vaccines, patients) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (vaccines[j] > vaccines[j + 1]) {
        const temp = vaccines[j];
        vaccines[j] = vaccines[j + 1];
        vaccines[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (patients[j] > patients[j + 1]) {
        const temp = patients[j];
        patients[j] = patients[j + 1];
        patients[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (vaccines[i] <= patients[i]) {
      return false;
    }
  }

  return true;
};

console.log(savePatients(5, [20, 10, 50, 30, 40], [35, 25, 15, 55, 45])); // Вывод: false
console.log(savePatients(3, [20, 10, 50], [3, 8, 5])); // Вывод: true
