// 1. Global Scope and Local Scope

// let l = "I'm let in global scope";
// var v = "I'm var in global scope";

// if (true) {
//     let l = "let in block scope";
//     var v = "var in block scope";

//     console.log(l, v);
// }

// console.log(l, v);


// 2. Const Variables
// const c = "I'm Stable Constant Value";
// c = "I want to change";
// console.log(c);
// if (true) {
//     const a = "a";
//     const c = "c";
//     c = "I want to change"; // error unable to change the const declaration value
//     console.log(a);
//     console.log(c);
// }
// console.log(c);

// ===============================================================================================
// 3. Arrow Functions

// var ShowName = () => {
//     var name = "HWK";
//     console.log("My Name is " + name);
// }
// const ShowName = () => console.log("Hello");
// const ShowName = (name) => console.log(name); //one parameter
// const ShowName = (name, age) => console.log("My name is " + name + " and age is " + age); //two parameters

// ShowName("hwk", 24);


//==============================================================================================================
// 4. This Keyword

// const Person = {
//     name: "HWK",
//     age: 24,
//     ShowName() {
//         console.log(this.name);
//     },
//     ShowAge() {
//         let self = this;
//         console.log(self.age);
//     }
// }

// console.log(Person.name, Person.age);
// Person.ShowName();
// Person.ShowAge();


//==============================================================================================================
// 5. Rest Parameters
// function multi(num1, num2) {
//     return num1 * num2;
// }

// console.log(multi(6, 6)); //normal function

// function multi(name, ...num) {
//     console.log(name);
//     let total = 1;
//     for (n of num) {
//         total *= n;
//     }
//     console.log(total);
// }
// multi("HWK", 3, 4); //24


//==============================================================================================================
// 6. Spread Operators

// let fruits = ['apple', 'orange'];
// let fullfill = [...fruits, 'watermelon'];
// console.log(fullfill);

// let Person = {
//     name: "HWK",
//     age: 24,
// };
// let PersonDetail = { ...Person, address: "Ygn", Phone: "0999999" };
// console.log(PersonDetail);

//==============================================================================================================
// 7. Object Literal Operators

// const Human = (name) => {
//     return {
//         name: name
//     }
// }
// console.log(Human('hwk'));


// const Human = (name, age) => {
//     return {
//         name,
//         age
//     }
// }
// console.log(Human('hwk', 24));

// const Person = () => {
//     return {
//         ShowName(name) {
//             console.log(name);
//         },
//         ShowAge(age) {
//             console.log(age);
//         }
//     }
// }
// Person().ShowName('hwk');
// Person().ShowAge(24);

//Computed Properties
//အတွင်းထဲက variable ကို dynamicလုပ်လို့ရ။

// const person = (name) => {
//     let prefix = 'Mr.';
//     return {
//         [prefix + name]: name
//     }
// }
// console.log(person('hwk')['Mr.hwk']);


//==============================================================================================================
// 8. Destructing Properties

//Array Destructing

// const fruits = ['apple', 'orange', 'mango', 'watermelon', 'pineapple'];

// const [a, b, c, d, e] = fruits;

// console.log(a, c, e);


//Object Destructing

// const person = {
//     name: 'hwk',
//     age: 24,
//     phone: '09123456789',
// }
// const { name, age, phone: ph } = person;
// console.log(ph);


// 9. Template String
// const name = "hwk";
// const age = 24;
// console.log("My name is " + name + " and I'm " + age + " years old.");
// console.log(`My name is ${name} and I'm ${age} years old.`);


// 10. For In & Of Loop

// const name = "Wyne";
// for (n in name) { //For In Loop To get Output result as Index Number
//     console.log(n);
// }

// for (n of name) {
//     console.log(n); // For Of Loop To get Output result as Value
// }

// const Color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
// for (c in Color) {
//     console.log(c);
// }
// for (c of Color) {
//     console.log(c);
// }

//==============================================================================================================
// 11. Js Class & Static Extends

// class Person {
// constructor() {
//     console.log('Constructor');
// }
//     constructor(name) {
//         console.log('Name Constructor', name);
//     }
//     static ShowDetails() {
//         console.log('Static Method');
//     }
// }
// let p = new Person();
// let p = new Person('hwk');
// Person.ShowDetails();

// class Employee extends Person {
//     constructor(name) {
//         super(name);
//         console.log(name);
//     }
// }
// let e = new Employee('hwk');

//==============================================================================================================
// 12+13. Module System

// import { sum as helperSum, name, ShowName } from './helper.js';
// import { sum as calculatorSum } from './calculator.js';
// console.log(sum(1, 1, 6));
// console.log(helperSum(1, 1, 6));
// console.log(name);
// ShowName();
// console.log(calculatorSum(4, 6));


// 14. Default Export
// import w from './helper.js';
// console.log(w());


//==============================================================================================================
// 15. Async Task
// console.log('start');
// function FetchData() {
//     console.log('Fetching data...');
// }
// setTimeout(FetchData, 2000);
// console.log('end');


// 16. Async Await
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => console.log(res.data))
//     .catch(error => console.error('Error fetching data:', error));


const FetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res.data);
};
FetchData();

