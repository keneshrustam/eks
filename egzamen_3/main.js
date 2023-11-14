//! Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.


const a = 65
const b = 'hello'
const d = 'trou'

console.log("Число:", a);
console.log("Строка:", b);
console.log("Булево значение:",d);



//! Преобразуйте строку в число и наоборот. Выведите результат в консоль.


const g = '76'
const s = 34
console.log(+g, '' + s);



//! Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.

const mas = [1,2,3,4,5]
for (let i = 0; i < mas.length; i++) {
    console.log(mas[i]);
}

//! Создайте объект, представляющий информацию о человеке (имя, возраст, город и т.д.). Выведите значения свойств в консоль.

let obj = {
    name: "Иван",
    age: 25,
    city: "Москва",
    lang: 'js'
}
console.log("Имя:", obj.name);
console.log("Возраст:", obj.age);
console.log("Город:", obj.city);
console.log('Язык:', obj.lang);


//! Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.

function getLogNam(nam1){
    if(nam1 % 2 === 0){
        console.log(nam1 + ':chet');
    } else {
        console.log(man1 + ':nechet');
    }
}
getLogNam(44)

// !Используя цикл, выведите числа от 1 до 10 в консоль.
const nam2 = 10
for(let i = 0; i <= nam2; i++) {
    console.log(i);
}

//! Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль - Hello World!

function logFunk() {
    console.log("Hello World!");
}

logFunk();



const logFunk1 = function() {
    console.log("Hello World!");
};


logFunk1();



const logFunk2 = () => {
    console.log("Hello World!");
};


logFunk2();

//! Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Баурым promise выполнено🤝");
    }, 1000);
  });
  
  myPromise.then((result) => {
    console.log(result);
  });
  
  const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Баурым произошла ошибка 🥰");
    }, 1000);
  });
  
  errorPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

//! Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.

function sretMAS(mas3) {
    if (mas3.length === 0) {
        return 0; 
    }
    
    const sum2 = mas3.reduce((o, t) => o + t, 0);
    
    return sum2 / mas3.length;
}

const chisloMas = [5, 10, 15, 20];
const sred = sretMAS(chisloMas);

console.log("Среднее арифметическое:", sred);

//! Напишите функцию, которая принимает массив строк и возвращает новый массив строк, где каждый элемент в верхнем регистре.
const con = ["Привет", "Мир", "JavaScript"].map(elem => elem.toUpperCase())
console.log(con);

//! Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив объектов с полями "имя" и "возраст", отсортированный по возрастанию возраста.

function sortPoVoz(mas4) {
    const otsotrmas = mas4.slice().sort((a, b) => a.age - b.age);
    return otsotrmas;
}

const people = [
    { people: "rustam", age: 18 },
    { people: "arsen", age: 17 },
    { people: "islam", age: 19 }
];

const otsortpeople = sortPoVoz(people);

console.log("Неотсортированный массив:", people);
console.log("Отсортированный массив по возрасту:", otsortpeople);

//! Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.

function unikChislo(mas5) {
    const unik = new Set(mas5);

    const unikMasLog = [...unik];

    return unikMasLog;
}

const ishodchislo = [1, 2, 3, 4, 2, 5, 1, 6];
const unikchislomas = unikChislo(ishodchislo);

console.log("Исходный массив чисел:", ishodchislo);
console.log("Уникальные числа в массиве:", unikchislomas);


// ! Напишите функцию, которая принимает массив объектов и сортирует их по полю "имя" в алфавитном порядке.







// ! Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
function filChet(mas6) {
    const chetCHISLO1 = mas6.filter((chis) => chis % 2 === 0);
    return chetCHISLO1;
}

const ishodchislo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chetchislomas3 = filChet(ishodchislo1);

console.log("Исходный массив чисел:", ishodchislo1);
console.log("Четные числа в массиве:", chetchislomas3);
