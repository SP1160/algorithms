// 1
// Нам дан отсортированный массив уникальных целых чисел и целевое значение. Нужно:
// Найти индекс целевого значения, если оно присутствует в массиве
// Если целевого значения нет, вернуть индекс, где оно должно было бы находиться, чтобы массив оставался отсортированным

const searchInsert = (nums, target) => {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      first = middle + 1;
    }

    if (nums[middle] > target) {
      last = middle - 1;
    }
  }

  // Ключевой момент: когда цикл завершается, first всегда указывает на правильную позицию для вставки, так как:
  // - Все элементы слева от first меньше цели
  //- Все элементы справа от first больше цели
  return first;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 2, 3, 5, 6, 7], 4));

// 2
// Нам дано неотрицательное целое число x. Нужно вычислить его квадратный корень, округлённый вниз до ближайшего целого числа (это называется "пол" от квадратного корня).
// Ограничения:
// - Нельзя использовать встроенные функции возведения в степень или операторы (например, Math.pow(), **, Math.sqrt())
// - Результат должен быть неотрицательным

const mySqrt = (x) => {
  if (x < 2) return x;

  let first = 0;
  // Оптимизация: для x > 4, sqrt(x) < x/2
  let last = Math.floor(x / 2);

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    const square = middle * middle;

    if (square === x) {
      return middle;
    }

    if (square < x) {
      first = middle + 1;
    }

    if (square > x) {
      last = middle - 1;
    }
  }

  // После завершения цикла while (first <= last) выполняется условие first > last, и при этом:
  // - last² ≤ x (последнее "подходящее" значение)
  // - first² > x (первое "слишком большое" значение)
  return last;
};

console.log(mySqrt(4));
console.log(mySqrt(8));

// 3
// У нас есть массив из n различных чисел в диапазоне [0, n].
// Поскольку диапазон содержит n+1 число (от 0 до n включительно), а массив содержит только n элементов, одно число обязательно отсутствует.

const missingNumber = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);

  let first = 0;
  let last = sortedNums.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    if (sortedNums[middle] === middle) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }

  // Почему возвращаем first?
  // После завершения цикла:
  // - first указывает на позицию, где должно быть пропущенное число
  // - Все числа с индексами < first находятся на своих местах
  // - Первое "неправильное" место и есть пропущенное число
  return first;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
