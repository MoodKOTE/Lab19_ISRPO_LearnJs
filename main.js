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

//pr4 
for (let i = 1; i <= 4; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "*"
    }
    console.log(row);
}