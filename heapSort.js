// Пирамидальная сортировка

const heapSort = (arr) => {
  // ЭТАП 1: ПОСТРОЕНИЕ MAX-HEAP

  // ПОЧЕМУ НАЧИНАЕМ С (n/2 - 1)?
  // В полном бинарном дереве последний внутренний узел имеет индекс (n/2 - 1)
  // Все узлы после этого индекса - листья (у них нет потомков)
  const lastInternalNode = Math.floor(arr.length / 2) - 1;

  // Идем от последнего внутреннего узла к корню
  for (let i = lastInternalNode; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  // ЭТАП 2: ИЗВЛЕЧЕНИЕ ЭЛЕМЕНТОВ ИЗ КУЧИ

  // Извлекаем элементы один за другим
  for (let i = arr.length - 1; i > 0; i--) {
    // ШАГ 1: Перемещаем максимум в конец
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // ШАГ 2: Восстанавливаем свойство кучи
    heapify(arr, 0, i);
  }

  return arr;
};

// Функция для "просеивания вниз" элемента в куче
function heapify(arr, index, length) {
  const left = 2 * index + 1; // Левый потомок
  const right = 2 * index + 2; // Правый потомок
  let largest = index; // Изначально корень - наибольший элемент

  // Если левый потомок больше корня
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // Если правый потомок больше текущего наибольшего
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // Если наибольший элемент не корень
  if (largest !== index) {
    // Меняем местами
    const temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;

    // Рекурсивно просеиваем затронутое поддерево
    heapify(arr, largest, length);
  }
}

console.log(heapSort([6, 5, 3, 1, 8, 7, 2, 4]));
