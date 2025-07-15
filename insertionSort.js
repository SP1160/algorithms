// 1
// Отсортировать массив по возростанию

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
};

console.log(insertionSort([6, 5, 1, 3, 9, 4, -1, 0, -30]));

// 2
// Отсортировать массив строк на русском в алфовитном порядке

const alphabetSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].localeCompare(temp, "ru") > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
};

console.log(alphabetSort(["яблоко", "мандарин", "ёж", "арбуз", "клубника", "банан"]));

// 3
// Найти медиану в массиве чисел

const medianSearch = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
};

console.log(medianSearch([6, 5, 1, 3, 9])); // [1, 3, 5, 6 ,9] = 5
console.log(medianSearch([6, 5, 1, 3, 9, 10])); // [1, 3, 5, 6 ,9 ,10] = 5.5

// 4
// Условие: Дан массив объектов студентов с их оценками. Нужно отсортировать студентов по среднему баллу по убыванию. Если средние баллы равны, сортировать по имени по алфавиту.
// Входные данные: Массив объектов {name: string, grades: number[]}
// Выходные данные: Отсортированный массив студентов
// Пример:

// Вход: [{name: "Анна", grades: [4, 5, 3]}, {name: "Борис", grades: [5, 5, 4]}, {name: "Алиса", grades: [4, 4, 4]}]
// Выход: [{name: "Борис", grades: [5, 5, 4]}, {name: "Алиса", grades: [4, 4, 4]}, {name: "Анна", grades: [4, 5, 3]}]

const calculateAverage = (grades) => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

const sortStudents = (students) => {
  for (let i = 1; i < students.length; i++) {
    const currentStudent = students[i];
    const currentAverage = calculateAverage(currentStudent.grades);

    let j = i - 1;

    while (j >= 0) {
      const compareAverage = calculateAverage(students[j].grades);
      const shouldMove =
        compareAverage < currentAverage ||
        (compareAverage === currentAverage && students[j].name > currentStudent.name);

      if (shouldMove) {
        students[j + 1] = students[j];
        j--;
      } else {
        break;
      }
    }

    students[j + 1] = currentStudent;
  }

  return students;
};

console.log(
  sortStudents([
    { name: "Анна", grades: [4, 5, 3] },
    { name: "Борис", grades: [5, 5, 4] },
    { name: "Алиса", grades: [4, 4, 4] },
  ])
);

// 5
// Условие: Дан массив чисел, записанных римскими цифрами. Нужно отсортировать их по возрастанию числового значения.
// Входные данные: Массив строк (римские числа: I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII и т.д.)
// Выходные данные: Отсортированный массив римских чисел
// Пример:

// Вход: ["VII", "III", "XI", "I", "IX", "V"]
// Выход: ["I", "III", "V", "VII", "IX", "XI"]

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToArabic = (roman) => {
  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currnet = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next && currnet < next) {
      result -= currnet;
    } else {
      result += currnet;
    }
  }

  return result;
};

const insertionSortRoman = (romanNumbers) => {
  for (let i = 1; i < romanNumbers.length; i++) {
    const currnetRoman = romanNumbers[i];
    const currentArabic = romanToArabic(currnetRoman);

    let j = i - 1;

    while (j >= 0 && romanToArabic(romanNumbers[j]) > currentArabic) {
      romanNumbers[j + 1] = romanNumbers[j];
      j--;
    }
    romanNumbers[j + 1] = currnetRoman;
  }

  return romanNumbers;
};

console.log(insertionSortRoman(["VII", "III", "XI", "I", "IX", "V"]));
