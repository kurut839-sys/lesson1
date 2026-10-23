// const displayEl = document.querySelector("#display");
// const startBtn = document.querySelector("#start-btn");
// const pauseBtn = document.querySelector("#pause-btn");
// const resetBtn = document.querySelector("#reset-btn");

// let seconds = 0;
// let intervalId = null;

// function updateDisplay() {
//   const m = String(Math.floor(seconds / 60)).padStart(2, "0");
//   const s = String(seconds % 60).padStart(2, "0");
// displayEl.textContent = `${m}:${s}`;


// }

// startBtn.addEventListener("click", () => {
//   if (intervalId) return;
//   intervalId = setInterval(() => {
//     seconds++;
//     updateDisplay();
//   }, 1000);
// });

// pauseBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = null;
// });

// resetBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   seconds = 0;
//   updateDisplay();
// });


// метод масива 
// что такое масив
// legth-это свойство масива которое показывает сколько элементов в масиве масивти ичиндеги элементердин саны
// push-это метод масива который добавляет элемент в конец масива массивтин ягына элемент кошот
// pop-это метод масива который удаляет элемент с конца масива массивтин ягынан элементди очуратат
// shift-это метод масива который удаляет элемент с начала масива массивтин башынан элементди очуратат


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(11);
// arr.pop();
//  arr.unshift(0);  //-масивтин башына элемент кошот
//    arr.shift();  //-масивтин башынан элементи очуратат
// arr.splice(2, 1); //-масивтин ичиндеги элементти алып салат 
// arr.splice(2, 0, 100); //-масивтин ичиндеги элементти кошот
// arr.reverse(); //-масивтин ичиндеги элементтерди тескери кылат
// // arr.sort(); //-масивтин ичиндеги элементтерди сорттойт
// arr.reduce((acc, curr) => acc - curr, 0); //-масивтин ичиндеги элементтерди кошот умнажение или - плюс крч канкулятор
// arr.shift();
// console.log(arr);
// console.log(arr.length);
 

// const double = arr.map ((num => num * 2));
// console.log(double);  [2, 4, 6, 8, 10]
// const evens = arr.filter(num => num % 2 === 0);
// console.log(evens);  [2, 4, 6, 8, 10]
// console.log(arr [0]); //-масивтин 1 элементти чыгарат

let rr = [];
for (let i = 1; i <= 50; i++) {
    rr.push(i);}
let result = rr
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
console.log(result);
