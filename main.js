// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// //pr1
// for (let i = 1; i < 11; i++){
//     console.log(i);
// }

// for (let i = 1; i < 11; i++){
//     if (Math.trunc(i % 2 == 0)){
//         console.log(i);
//     }
// }

// let count = 0;
// for (let i = 1; i < 11; i++){
//     count += i
//     console.log(count);
// }
// console.log(count);

// let count = 0;
// while (count < 3){
//     console.log("Count:", count);
//     count++;
// }

// //pr2
// let number = 5;
// while(number > 0){
//     console.log("Count:", number);
//     number--;
// }

// let doValue = 0;
// do{
//     console.log("Value:", doValue);
//     doValue++;
// }while (doValue < 3);

// for (let i = 0; i < 10; i++){
//     if (i === 5){
//         break;
//     }
//     console.log(i);
// }

// //pr3
// for (let i = 0; i < 10; i++){
//     if (i === 5){
//         continue;
//     }
//     console.log(i);
//     if (i === 8){
//         break;
//     }
// }

// for (let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// //pr4 
// for (let i = 1; i <= 4; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*"
//     }
//     console.log(row);
// }

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(3,5));

// //pr5
// function multiply(a, b){
//     return a * b;
// };
// console.log(multiply(3,5));

// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }
// sayHello("Тимофей")

// //pr6
// function printInfo(name, age){
//     console.log(`Name: ${name}\n Age: ${age}`);
// };
// printInfo("Max", 19);

// function greet(name = "Guest"){
//     console.log("Hello, " + name);
// }
// greet();
// greet("Anastasia");

// // pr7
// function calculateDiscount(price, discount = 10){
//     return price - (price * (discount / 100));
// }
// console.log(calculateDiscount(150));
// console.log(calculateDiscount(150, 15));

// const add = function (a, b){
//     return a + b;
// };
// console.log(add(2, 3))

// function sumFunc(a, b) {
//   return a + b;
// }

// const sumFunc2 = (a, b) => a + b;

// const double = x => x * 2;

// const sayHi = () => console.log("Hi");

// const square = x => x * x;

// const calculate = (a, b) =>{
//     let result = a + b;
//     return result * 2;
// };

// let numberArr = [1, 2, 3, 4, 5];
// console.log(numberArr);
// console.log(numberArr[0]);
// console.log(numberArr[1]);
// console.log(numberArr.length);
// numberArr.push(10);
// console.log(numberArr);
// numberArr.pop();
// console.log(numberArr);

// //pr8
// let colors = ['red', 'blue', 'green']
// console.log(`${colors[0]}, ${colors[2]}`);
// colors[1] = 'yellow';
// for (let i in colors){
//     console.log(colors[i]);
// };

// //pr9
// let students = [];
// students.push("Max");
// students.push("Kolya");
// students.push("Dima");
// students.pop();
// console.log(students)
// for (let i in students){
//     console.log(students[i]);
// }

// let number2 = [10, 20, 30];
// for (let i = 0; i < number2.length; i++){
//     console.log(number2[i])
// }
// for (let value of numbers2) {
//   console.log(value);
// }
// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// console.log(numbersArr.includes(1));
// console.log(numbersArr.indexOf(2));

// console.log(fruits.includes("яблоко")); // true
// console.log(fruits.includes("манго")); // false

// //pr10
// let cities = ["Москва", "Казань", "Воронеж"]
// if (cities.includes("Москва")){
//     console.log(cities.indexOf("Москва"));
// };

// let user2 = {
//     name: "Ivan",
//     age: 20,
//     isStudent: true,
//     sayHello: function(){
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };
// for (let key in user2){
//     console.log(key + ": " + user2[key]);
// }
// user2.sayHello();
// console.log(user2);
// console.log(user2.name);
// console.log(user2.age);
// console.log(user2["name"]);

// user2.age = 30;
// user2.name = "Кирилл";
// delete user2.isStudent;
// console.log(user2)

// //pr11
// let book = {
//     title: "Metro 2033",
//     author: "Dmitriy Gluhovskiy",
//     year: 2011,
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// book.year = 2012;
// console.log(book.year);

//pr12
// let car = {
//     brand: "BMW",
//     year: 2012,
//     getInfo: function(){
//         console.log(`${car.brand}, ${car.year}`)
//     },
// };
// car.getInfo();

//pr13
// let product = {
//     price: 20,
//     weight: 1,
//     name: "rice",
// }
// for (let i in product){
//     console.log(i + ":" + product[i])
// }

let student = {
  name: "Григорий",
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Волжский",
    street: "Пушкина",
  },
};

console.log(student.skills[0]);
console.log(student.address.city);