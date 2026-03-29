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

const add = function (a, b){
    return a + b;
};
console.log(add(2, 3))