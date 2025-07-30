// 1
// Отсортировать массив по возростанию

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr[pivotIdx];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
};

console.log(quickSort([6, 5, 1, 3, 9, 4, -1, 0, -30]));

// 2
// Отсортировать и вернуть нечетные элементы массива

const sortEven = (arr) => {
  const filtered = arr.filter((item) => item % 2);

  function sort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivotIdx = Math.floor(arr.length / 2);
    const pivot = arr[pivotIdx];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        equal.push(arr[i]);
      }
    }

    return [...sort(left), ...equal, ...sort(right)];
  }

  return sort(filtered);
};

console.log(sortEven([5, 1, 2, 4, 3, 90, 99, 3, 222, 54, 33]));

// 3
// Найти n-ый наименьший и наибольший элементы массива

const getMinMax = (arr, n) => {
  function sort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivotIdx = Math.floor(arr.length / 2);
    const pivot = arr[pivotIdx];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        equal.push(arr[i]);
      }
    }

    return [...sort(left), ...equal, ...sort(right)];
  }

  const sorted = sort(arr);

  return [sorted[n - 1], sorted[sorted.length - n]];
};

console.log(getMinMax([5, 2, 1, 3, 4, 6, 9, 7, 8], 2));

// 4
// Отсортировать и вернуть массив строк, не содержажий n-ую букву

const sortStringWith = (arr, sym) => {
  const filtered = arr.filter((item) => !new RegExp(sym, "i").test(item));

  function sort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivotIdx = Math.floor(arr.length / 2);
    const pivot = arr[pivotIdx];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].localeCompare(pivot, "ru") < 0) {
        left.push(arr[i]);
      } else if (arr[i].localeCompare(pivot, "ru") > 0) {
        right.push(arr[i]);
      } else {
        equal.push(arr[i]);
      }
    }

    return [...sort(left), ...equal, ...sort(right)];
  }

  return sort(filtered);
};

console.log(
  sortStringWith(["Клубника", "Яблоко", "Ёгурт", "Банан", "Ананас", "Дыня", "Мандарин"], "а")
);

// 5
// Даны две строки s и t, вернуть, true если t это анаграмма из s, и false в противном случае

const isAmagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const firstStrArr = s.split("");
  const secondStrArr = t.split("");

  function sort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const pivotIdx = Math.floor(arr.length / 2);
    const pivot = arr[pivotIdx];
    const left = [];
    const right = [];
    const equal = [];

    for (const char of arr) {
      if (char < pivot) {
        left.push(char);
      } else if (char > pivot) {
        right.push(char);
      } else {
        equal.push(char);
      }
    }

    return [...sort(left), ...equal, ...sort(right)];
  }

  const firstSortedStr = sort(firstStrArr);
  const secondSortedStr = sort(secondStrArr);

  return firstSortedStr.join("") === secondSortedStr.join("");
};

console.log(isAmagram("anagram", "nagaram"));
console.log(isAmagram("rat", "car"));
