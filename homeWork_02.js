// Задание 1 – Создать объект counter всеми возможными способами;

const counter = {
  count: 1,
}

const counter1 = Object.create(Object.prototype, {
  count: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  }
})

const counter2 = Object.assign({
  count: 1
})

function Counter(count) { // or class
  this.count = count;
}

const counter3 = new Counter(1)

const counter4 = new Object({
  count: 1
})

// Задание 2 – Скопировать объект counter всеми
// возможными способами;

const newCounter = Object.assign({}, counter)

const newCounter1 = JSON.parse(JSON.stringify(counter))

function deepCopyObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let newObj = {};

  for (let key in obj) {
    newObj[key] = deepCopyObject(obj[key])
  }

  return newObj;
}

const newCounter2 = deepCopyObject(counter)

const newCounter3 = {...counter}

const newCounter4 = structuredClone(counter);

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter() {
  let count = 0
  return function() {
    return count++
  }
}

let makeCounter1 = function () {
  let count = 0
  return function() {
    return count++
  }
}

let makeCounter2 = (a) => {
  let count = 0
  return function() {
    return count++
  }
}

let makeCounter3 = function makeCounter33() {
  let count = 0
  return function() {
    return count++
  }
}

// Задание 4 - прочитать и описать работу глобальной функции structuredClone()
/* 
  Метод structuredClone() интерфейса Window создает глубокий клон заданного значения, используя алгоритм структурированного клонирования.
  Синтаксис

  structuredClone(value)
  structuredClone(value, options)

  value - Объект для клонирования. Это может быть любой структурно-клонируемый тип.

  options (Необязательный) - Объект со следующими свойствами:
    transfer - Массив переносимых объектов , которые будут перемещены, а не клонированы в возвращаемый объект.

  Возвращаемое значение - Точная копия оригинала value.
*/

// Бонус
// Задание 1 –
// Написать функцию глубокого сравнения двух объектов:


const obj1 = {
  here: {
    is: "on",
    other: "2"
  },
  object: "Y",
};

const obj2 = {
  here: {
    is: "on",
    other: "3"
  },
  object: "Y",
};

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true
};

// Бонус 
// Задание 2 –
// Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return str.split('').reverse().join('');
}