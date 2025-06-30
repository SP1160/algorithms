// 1
// Поиск первого вхождения числа в массиве:
// Задача: Дан массив целых чисел arr и целевое число target. Найти индекс первого элемента в массиве, равного target. Если элемент не найден, вернуть -1.

const numberSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(numberSearch([1, 2, 3, 4, 5, 6, 7], 3));

// 2
// Проверка наличия элемента в списке строк:
// Задача: Дан список имен студентов students и имя nameToFind. Определить, присутствует ли студент с именем nameToFind в списке.

const studentNameSearch = (students, name) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === name) {
      return true;
    }
  }

  return false;
};

console.log(studentNameSearch(["max", "john", "ivan", "kirill", "liza"], "liza"));

// 3
// Поиск индекса последнего вхождения элемента:
// Задача: Дан массив arr и число target. Найти индекс последнего элемента, равного target. Если элемент не найден, вернуть -1.

const lastElementSearch = (arr, target) => {
  for (let i = arr.length - 1; i !== 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(lastElementSearch([1, 2, 3, 1, 5, 6, 1], 1));

// 4
// Поиск минимального/максимального элемента в массиве:
// Задача: Дан массив чисел arr. Найти значение минимального (или максимального) элемента в массиве.

const maxElementSearch = (arr) => {
  let maxValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
};

console.log(maxElementSearch([1, 2, 3, 6, 9, 4, 3, 1]));
console.log(Math.max.apply(null, [1, 2, 3, 6, 9, 4, 3, 1]));

// 5
// Поиск элемента, удовлетворяющего условию (четность):
// Задача: Дан массив целых чисел arr. Найти индекс первого четного числа (или первого числа больше 100, или первого отрицательного и т.д.).

const evenNumberSearch = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return i;
    }
  }

  return -1;
};

console.log(evenNumberSearch([1, 3, 5, 6, 8]));

// 6
// Поиск всех вхождений элемента (подсчет частоты):
// Задача: Дан массив arr и число target. Подсчитать, сколько раз target встречается в массиве.

const countTargetSearch = (arr, target) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
};

console.log(countTargetSearch([1, 3, 1, 6, 1], 1));

// 7
// Поиск заданного символа в строке:
// Задача: Дана строка str и символ char. Найти индекс первого вхождения символа char в строку str.

const charSearch = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }

  return -1;
};

console.log(charSearch("123459043", "3"));

// 8
// Поиск отсутствующего элемента в небольшом диапазоне:
// Задача: Дан массив arr размера N-1, содержащий уникальные целые числа в диапазоне [1, N]. Найти недостающее число в этом диапазоне.

const rangeNumberSearch = (arr) => {
  const n = arr.length + 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  return n;
};

console.log(rangeNumberSearch([1, 2, 3, 5, 6]));

// 9
// Поиск книги по названию в неотсортированном списке:
// Задача: В библиотечной системе данные о книгах (название, автор) хранятся в списке (массиве структур/объектов). Пользователь вводит название titleToFind. Найти объект книги с таким названием.

const bookNameSearch = (books, bookName) => {
  for (let i = 0; i < books.length; i++) {
    if (books[i].name === bookName) {
      return books[i];
    }
  }

  return null;
};

console.log(
  bookNameSearch(
    [
      {
        name: "Евгений Онегин",
        author: "Пушкин",
      },
      {
        name: "Капитанская дочка",
        author: "Пушкин",
      },
      {
        name: "Война и мир",
        author: "Толстой",
      },
      {
        name: "Мертвые души",
        author: "Гоголь",
      },
      {
        name: "Горе от ума",
        author: "Грибоедов",
      },
      {
        name: "Герой нашего времени",
        author: "Лермонтов",
      },
      {
        name: "Преступление и наказание",
        author: "Достоевский",
      },
    ],
    "Горе от ума"
  )
);
