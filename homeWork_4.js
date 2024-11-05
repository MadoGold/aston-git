// 1) Какие бывают алгоритмы сортировок ?

// 1. Сортировка пузырьком (Bubble sort): O(n^2)
// 2. Сортировка перемешиванием (Cocktail sort): O(n^2)
// 3. Сортировка вставками (Insertion sort): O(n^2) (в лучшем случае O(n))
// 4. Сортировка выбором (Selection sort): O(n^2)
// 5. Быстрая сортировка (Quicksort): O(n log n)  (в худшем случае O(n^2))
// Есть ещё много сортировок, которые используются редко или бесполезны, они могут иметь сложность O(n x n!)

// 2) Прочитать про "Операторы и выражения, циклы в JS"

// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.

// Первый способ, с помощью {}
const PersonObject = {
  name: 'myName',
  age: 20,
}

// Второй способ, с помощью функции конструтора
function PersonConstructor(name, age) {
  this.name = name
  this.age = age
}

const personConstructor = new PersonConstructor('namename', 21)

// Третий способ, после определения класса мы можем создать объекты класса с помощью конструктора
class PersonClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const personClass = new PersonClass('Valya', 19)

// Добавляем метод logInfo чтоб он был доступен всем объектам
Object.prototype.logInfo = function() {
  console.log('Name: ' + this.name + ' Age: ' + this.age)
}

// Создем объект Person2, чтобы в нём были доступны методы объекта Person с помощью Object.create
const Person2 = Object.create(PersonObject)
console.log(Person2); // {}
Person2.name = 'myName2'
Person2.age = 22
Person2.logInfo() // Name: myName2 Age: 22
console.log(Person2); // { name: 'myName2', age: 22 }

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class Person {
  constructor(name) {
    this.name = name;
  }
}

class PersonThree extends Person {
  constructor(name) {
    super(name);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const person3 = new PersonThree()
person3.name = 'dsaf'
console.log(person3.name, 1111); // dsaf


// БОНУС: 
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
total = 13
//result = [4, 9]

const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (total === arr[i] + arr[j]) {
        return [arr[i], arr[j]]
      }
    }
  }
  return null
}

console.log(firstSum(arr, total))


// 2) Какая сложность у вашего алгоритма ?
// Сложность O(n^2)