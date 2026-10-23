let array = [
  {
    id: 1,
    title: "BESTSELLER",
    Image: "./png/shakek1.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 2,
    title: "BESTSELLER",
    Image: "./png/gold2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 3,
    title: "BESTSELLER",
    Image: "./png/gold2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 4,
    title: "BESTSELLER",
    Image: "./png/gold2.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
];

let products = document.querySelector(".products");
let show = array.map((item) => {
  return `
     <div class="cart">
       <img src="${item.Image}" alt="">
          <h3>${item.title}</h3>
          <p>Trendy models of our experts, for the love of your life selected</p>
          <button onclick="addcart(${item.id})">Discover now</button>
    </div>
    `;
});
products.innerHTML = show.join("");

let num = [
  {
    id: 1,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 2,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 3,
    title: "123gold",
    Image: "./png/gool.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 4,
    title: "123gold",
    Image: "./png/gool.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 5,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 6,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 7,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 8,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 9,
    title: "123gold",
    Image: "./png/gool.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
  {
    id: 10,
    title: "123gold",
    Image: "./png/brill.png",
    desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
  },
];

let gold = document.querySelector(".gold");
let car = num.map((item) => {
  return `
    <div class="gold-card">
    <img src="${item.Image}" alt="">
   <h3>${item.title}</h3>
  <p>${item.desc}</p> 
  </div>
  `;
});
gold.innerHTML = car.join("");

// -----------------------


let openbtn = document.getElementById(".open");
let modal = document.querySelector(".modal");
 

openbtn.onclick = function () {
  modal.style.display = "block";
}

let basket = []
function addcart(id){
  // alert(id)
}
// --------------------
let count = document.querySelector('.count')

function Counter(){
  count.innerHTML =basket.length
}
// ----------------

let modalcart = document.querySelector('.modal-main')
function showcart(){
  let cart = basket.map((item) => {
          return
       


  })
  modalcart.innerHTML = cart.join('')
}
// ------------

function remove(id) {
  basket = basket.filter((item) => item. id !== id)
  Counter()
  showcart()
}

