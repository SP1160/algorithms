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
  // - Все элементы справа от first больше цели
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

// 4
// Игра "Угадай число"
// Суть игры:
// Я (компьютер) загадываю число от 1 до n, а вы должны его угадать.
// Правила:
// У вас есть функция int guess(int num), которая проверяет ваше предположение
// Каждый раз, когда вы угадываете неправильно, функция подсказывает:
// -1 — ваше число больше загаданного (нужно угадывать меньше)
// 1 — ваше число меньше загаданного (нужно угадывать больше)
// 0 — вы угадали правильно!
// Цель: Найти загаданное число за минимальное количество попыток.

// Глобальная переменная для хранения загаданного числа
let pickedNumber = 0;

/**
 * Функция для загадывания числа (вспомогательная)
 * @param {number} n - верхняя граница диапазона
 * @param {number} pick - загаданное число
 */
const setPick = (n, pick) => {
  if (pick < 1 || pick > n) {
    throw new Error(`Загаданное число должно быть от 1 до ${n}`);
  }
  pickedNumber = pick;
};

/**
 * API функция для проверки угадывания
 * @param {number} num - предполагаемое число
 * @returns {number} -1, 0, или 1
 */
const guess = (num) => {
  if (num > pickedNumber) {
    return -1; // Ваше число больше загаданного
  } else if (num < pickedNumber) {
    return 1; // Ваше число меньше загаданного
  } else {
    return 0; // Угадали правильно!
  }
};

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
  let first = 1;
  let last = n;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    const num = guess(middle);

    if (num === 0) {
      return middle;
    }

    if (num === 1) {
      first = middle + 1;
    }

    if (num === -1) {
      last = middle - 1;
    }
  }
};

setPick(10, 6);
console.log(guessNumber(10)); // Выведет: 6

setPick(1, 1);
console.log(guessNumber(1)); // Выведет: 1

setPick(2, 1);
console.log(guessNumber(2)); // Выведет: 1

setPick(100, 42);
console.log(guessNumber(100)); // Выведет: 42

// 5
// Даны два массива целых чисел nums1 и nums2. Нужно найти их пересечение (общие элементы).
// Важные требования:
// Уникальность - каждый элемент в результате должен встречаться только один раз (даже если он повторяется в исходных массивах)
// Порядок не важен - результат можно возвращать в любом порядке

const intersectionBinarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);

    if (arr[middle] === target) {
      return true;
    }

    if (arr[middle] < target) {
      first = middle + 1;
    }

    if (arr[middle] > target) {
      last = middle - 1;
    }
  }

  return false;
};

const intersection = (nums1, nums2) => {
  const longSortedArr =
    nums1.length > nums2.length ? nums1.sort((a, b) => a - b) : nums2.sort((a, b) => a - b);
  const shortUniqueArr = nums1.length > nums2.length ? [...new Set(nums2)] : [...new Set(nums1)];

  const result = [];

  for (let i = 0; i < shortUniqueArr.length; i++) {
    if (intersectionBinarySearch(longSortedArr, shortUniqueArr[i])) {
      result.push(shortUniqueArr[i]);
    }
  }

  return result;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([1, 2, 2, 1], [2, 2]));
