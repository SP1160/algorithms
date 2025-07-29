// 1
// Отсортировать массив по возростанию

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return result.concat(left, right);
  }

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([6, 5, 1, 3, 9, 4, -1, 0, -30]));

// 2
// Найти медиану двух массивов

const medianFromArrays = (arr1, arr2) => {
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    function merge(left, right) {
      const result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }

      return result.concat(left, right);
    }

    return merge(mergeSort(left), mergeSort(right));
  }

  const sorted = mergeSort([...arr1, ...arr2]);

  if (sorted.length % 2 !== 0) {
    return sorted[Math.floor(sorted.length / 2)];
  } else {
    return (sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2;
  }
};

console.log(medianFromArrays([6, 5], [1, 3, 9])); // [1, 3, 5, 6 ,9] = 5
console.log(medianFromArrays([3, 9, 10], [6, 5, 1])); // [1, 3, 5, 6 ,9 ,10] = 5.5

// 3
// Отсортировать массив строк с датами вида ДД.ММ.ГГГГ

const sortDates = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      const dataStringLeft = left[0].split(".").reverse().join("-");
      const dataStringRight = right[0].split(".").reverse().join("-");
      const dataLeft = new Date(dataStringLeft);
      const dataRight = new Date(dataStringRight);

      if (dataLeft < dataRight) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return result.concat(left, right);
  }

  return merge(sortDates(left), sortDates(right));
};

console.log(sortDates(["20.03.2002", "19.03.2002", "01.05.2019", "05.09.2016"]));

// 4
// Вернуть из массива данных о работниках, отсортированный по возрасту массив данных администраторов

const getSortAdmins = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0].age < right[0].age) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return result.concat(left, right);
  }

  const sotred = merge(getSortAdmins(left), getSortAdmins(right));

  return sotred.filter((person) => person.isAdmin);
};

console.log(
  getSortAdmins([
    { name: "Иван", age: 20, isAdmin: true },
    { name: "Кирил", age: 30, isAdmin: true },
    { name: "Юлия", age: 19, isAdmin: false },
    { name: "Сергей", age: 24, isAdmin: true },
  ])
);

// 5
// Инверсия массива показывает, насколько далек массив от сортировки
// Инверсии — это пары элементов массива, расположенные не по порядку
// Цель — разработать функцию, которая может вычислять инверсии для любого произвольного массива

const countInversions = (arr) => {
  if (arr.length < 2) return 0;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  let inversions = 0;
  inversions += countInversions(left);
  inversions += countInversions(right);

  let i = 0; // Индекс для левого подмассива
  let j = 0; // Индекс для правого подмассива
  let k = 0; // Индекс для исходного массива

  // Слияние с подсчётом инверсий
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      k++;
      i++;
    } else {
      arr[k] = right[j];
      k++;
      j++;
      inversions += left.length - i; // Все элементы left[i..end] > right[j]
    }
  }

  // Добавление оставшихся элементов
  while (i < left.length) {
    arr[k] = left[i];
    k++;
    i++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    k++;
    j++;
  }

  return inversions;
};

console.log(countInversions([1, 2, 3, 4])); // 0
console.log(countInversions([1, 3, 2, 4])); // 1
console.log(countInversions([4, 1, 2, 3])); // 3
console.log(countInversions([4, 3, 2, 1])); // 6

// Пошаговое объяснение:
// Базовый случай:

// Если массив содержит 0 или 1 элемент, инверсий нет — возвращаем 0.

// Разделение массива:

// Массив разделяется на левую (left) и правую (right) половины.

// Рекурсивно вызываем функцию для каждой половины, чтобы отсортировать их и подсчитать инверсии внутри них.

// Процесс слияния:

// Инициализируем индексы для левого (i), правого (j) подмассивов и исходного массива (k).

// Сравниваем элементы left[i] и right[j]:

// Если left[i] <= right[j], элемент left[i] добавляется в исходный массив без увеличения счётчика инверсий.

// Если right[j] < left[i], элемент right[j] добавляется в исходный массив, и счётчик инверсий увеличивается на количество оставшихся элементов в левом подмассиве (left.length - i).

// Добавление остатков:

// После основного цикла добавляем оставшиеся элементы из левого или правого подмассива в исходный массив.

// Возврат результата:

// Возвращаем общее количество инверсий: сумма инверсий в левой и правой половинах плюс инверсии, обнаруженные при слиянии.
