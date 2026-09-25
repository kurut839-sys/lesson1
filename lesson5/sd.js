// циклдар 
// for-цикл
// while-цикл

// for ( i = 0; i < 10; i++) {
//     console.log( " hii ")
// }

// let  i= true;
// while (i) {
//     console.log(" hii" + i);
//     i++;
// }
//  == - проверка даных 
// === - проверка даных и чисел текстов

// console.log( 5 == '5'); true
// console.log(5 === '5'); false

// for(i=0; i < 10; i++){
//     if ( i == 5){
//         // break
//         continue;
//     }
//     console.log(i)
// }




// let name = prompt("сколько таблиц пусть выйдет");

// console.log(name); {




// let name = prompt("до сколькмх пусть выйдет таблица");

// console.log(name);}  



 let name = prompt("ведите цифру");



let num = Number(prompt("Выберите таблицу от 1 до 10:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " × " + i + " = " + (num * i));
}