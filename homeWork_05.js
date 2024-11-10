// 1)
// let promiseTwo = new Promise((resolve, reject) => {
//    resolve("a");
// });

// promiseTwo
// .then((res) => {
//    return res + "b"; // a + b
// })
// .then((res) => {
//    return res + "с"; // ab + c
// })
// .finally((res) => {
//    return res + "!!!!!!!"; // не возвращает
// })
// .catch((res) => {
//    return res + "d"; // не срабатывает
// })
// .then((res) => {   
//    console.log(res); // abc
// });

// Вывод: abc

// 2)
// function doSmth() {
//    return Promise.resolve("123");
// }

// doSmth()
// .then(function (a) {
//    console.log("1", a); //1 123
//    return a;
// })
// .then(function (b) {
//    console.log("2", b); //2 123
//    return Promise.reject("321");
// })
// .catch(function (err) {
//    console.log("3", err); // 3 321
// })
// .then(function (c) {
//    console.log("4", c); // 4 undefined
// return c;
// });

// Вывод:
// 1 123
// 2 123
// 3 321
// 4 undefined

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

// 1 вариант
// let count = 0

// function logIndexWithTimeout(arr) {
//   if (arr.length > 0) {
//     setTimeout(() => {
//       arr.shift()
//       console.log(count++);
//       logIndexWithTimeout(arr)
//     }, 3000)
//   } else return arr
// }

// logIndexWithTimeout([10, 12, 15, 21])

// 2 вариант
function logIndexWithTimeout(arr) {
  arr.forEach((_, index) => {
      setTimeout(() => {
          console.log(index)
      }, (index + 1) * 3000)
  })
}

logIndexWithTimeout([10, 12, 15, 21])

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

// Да, в современных версиях JavaScript (ES2022 и выше) можно использовать await на "верхнем уровне" модулей.
// Это значит, что можно использовать await вне функции async, но только в модулях.
// Однако, если вы использовать обычные скрипты (не модули), нужно будет обернуть await в асинхронную функцию.

// БОНУС ЗАДАНИЕ 
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */

function fetchUrl(url, attempts = 5) {
  return new Promise((resolve, reject) => {
    function attemptFetch(currentAttempt) {
      fetch(url)
        .then(response => {
          if (response.ok) {
            resolve(response.text());
          } else {
            throw new Error(`Ошибка: ${response.status}`);
          }
        })
        .catch(error => {
          if (currentAttempt < attempts) {
            console.log(`Попытка ${currentAttempt + 1} не удалась`);
            attemptFetch(currentAttempt + 1);
          } else {
            reject(`Не удалось получить данные после ${attempts} попыток. Ошибка: ${error.message}`);
          }
        });
    }
    
    attemptFetch(0);
  });
}

fetchUrl('https://google/com&#39')
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
})// сatch должен сработать только после 5 неудачных попыток получить содержимое страницы внутри fetchUrl