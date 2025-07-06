// 1
// Отсортировать массив по возростанию

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    // Меняем местами найденный минимальный элемент с первым в неотсортированной части если текущий элемент не является минимальным
    if (indexMin !== i) {
      let tmp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = tmp;
    }
  }

  return arr;
};

console.log(selectionSort([6, 5, 1, 3, 9, 4, -1, 0, -30]));

// 2
// Отсортировать массив по возростанию/убыванию в зависимости от параметра

const selectionSortOrdered = (arr, isDesc) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      const condition = isDesc ? arr[j] > arr[indexMin] : arr[j] < arr[indexMin];

      if (condition) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      const temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }

  return arr;
};

console.log(selectionSortOrdered([6, 5, 1, 3, 9, 4, -1, 0, -30], true));

// 3
// Найти [наименьший, наибольший] элементы в массиве

const selectionSortFindExtremes = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return [min, max];
};

console.log(selectionSortFindExtremes([6, 5, 1, 3, 9, 4, -1, 0, -30]));

// 4
// Найти третье максимальное знчение в массиве, иначе вернуть максимальное значение в массиве

const thirdMax = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[indexMin]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      const temp = nums[i];
      nums[i] = nums[indexMin];
      nums[indexMin] = temp;
    }
  }

  let count = 0;
  let prev = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      count++;
      prev = nums[i];
      if (count === 3) {
        return nums[i];
      }
    }
  }

  return nums[0];
};

console.log(thirdMax([1, 3, 4, 2, 2]));
console.log(thirdMax([1, 3]));

// 5
// Удаление дубликатов в массиве

const removeDublicates = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }

  return arr;
};

console.log(removeDublicates([1, 1, 1, 5, 5, 7, 5, 3, 1, 8, 9, 10, -1, -1]));

// 6
// Отсортировать массив объектов по определённому свойству (например, по возрастанию/убыванию значения свойства "цена")

const sortByKey = (arr, key, isDesc) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      const condition = isDesc
        ? arr[j][key] > arr[indexMin][key]
        : arr[j][key] < arr[indexMin][key];

      if (condition) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      const temp = arr[i];
      arr[i] = arr[indexMin];
      arr[indexMin] = temp;
    }
  }

  return arr;
};

const arr = [
  { price: 30, count: 200 },
  { price: 90, count: 40 },
  { price: 10, count: 100 },
  { price: 50, count: 500 },
];

console.log(sortByKey(arr, "price", true));
console.log(sortByKey(arr, "count"));
