
let count = 0;

const number = document.getElementById("number");

document.getElementById("plus").addEventListener("click", function () {
    count = count + 1;
    number.textContent = count;
});

document.getElementById("minus").addEventListener("click", function () {
    count = count - 1;
    number.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    number.textContent = count;
});

document.getElementById("multiply").addEventListener("click", function () {
    count = count * 2;
    number.textContent = count;
});
