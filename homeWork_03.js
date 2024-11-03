// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// По задумке длина массива должна быть неизменной. Для того, чтобы добавить элемент в массив, нужно создать новый
// массив длиннее старого на 1 элемент, затем скопировать в него все значения старого массива и в качестве последнего элемента
// указать новое значение.
// Поэтому массивы не всегда подходят под легковесные операции и их можно назвать "неправильными"

//Массивы совмещают в себе несколько структур данных:
//Стек
//Очередь

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.bind(obj)()
logger.call(obj)
logger.apply(obj)

// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.

const numsArr = [2, -2, 3, 7]

let sumNumsArr = numsArr.reduce((prevNum, num) => prevNum + num)

console.log(sumNumsArr);

// - Создайте массив строк и объедините их в одну строку.

const strArr = ['a', 'b', 'cd']

let concatStrArr = strArr.join('')

console.log(concatStrArr);

// - Найдите максимальный и минимальный элементы в массиве чисел.

const arrOfNums = [-1, 0, 10, -3]
let sortArrOfNums = arrOfNums.toSorted((a, b) => a - b) // toSorted, а не sort, тк toSorted не мутирует изначальный массив

let minNum = sortArrOfNums[0]
let maxNum = sortArrOfNums[sortArrOfNums.length - 1]

console.log(minNum, maxNum);

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.

function Stack() {
  this.value = []
  this.length = 0
  this.prevValue
  this.prevLength = 0

  this.push = (el) => {
    this.prevValue = [...this.value]
    this.prevLength = this.length    
    this.value.push(el)
    this.length++
  }

  this.pop = () => {
    if (this.length > 0) {
      this.prevValue = [...this.value]
      this.prevLength = this.length   
      this.length--
      return this.value.pop()
    } else {
      return null
    }
  }

  this.getLast = () => {
    if (this.length > 0) {
      return this.value[this.length - 1]
    } else {
      return null
    }
  }

  this.isEmpty = () => {
    return this.length === 0
  }

  this.undo = () => {
    this.value = [...this.prevValue]
    this.length = this.prevLength   
    return this.value
  }
}

let newStack = new Stack

newStack.push('dsa')
newStack.push('1')
newStack.push('3')
newStack.push('ds44a')
newStack.push('5453')

console.log(newStack.value); // [ 'dsa', '1', '3', 'ds44a', '5453' ]
newStack.pop()
console.log(newStack.value); // [ 'dsa', '1', '3', 'ds44a' ]
console.log(newStack.isEmpty()); // false
console.log(newStack.getLast()); // ds44a
console.log(newStack.length); // 4
console.log(newStack.undo()); // [ 'dsa', '1', '3', 'ds44a' ]
console.log(newStack.length); // 5


// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

function Queue() {
  this.value = []
  this.length = 0

  this.push = (el) => {
    this.value.push(el)
    this.length++
  }

  this.shift = () => {
    this.value.shift()
    this.length--
  }

  this.getFirst = () => {
    if (this.length > 0) {
      return this.value[0]
    } else {
      return null
    }
  }

  this.isEmpty = () => {
    return this.length === 0
  }
}


let newQueue = new Queue

newQueue.push('dsa')
newQueue.push('1')
newQueue.push('3')
newQueue.push('ds44a')
newQueue.push('5453')

console.log(newQueue.value); // [ 'dsa', '1', '3', 'ds44a', '5453' ]
newQueue.shift()
console.log(newQueue.value); // [ '1', '3', 'ds44a', '5453'  ]
console.log(newQueue.isEmpty()); // false
console.log(newQueue.getFirst()); // 1
console.log(newQueue.length); // 4

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

function logger1() {
  console.log(`I output only external context: ${this.item}`);
}

const obj1 = { item: "some value" };

Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  }
}

logger1.myBind(obj1)()