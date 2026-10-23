fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((users) => {
    
    let container = document.querySelector('.container')
    users.forEach(element => {
        container.innerHTML += `
        <div class="container"
        <h1>${element.name}</h1>
        <b>${element.phone}<b>
        <hr>${element.hr}
        </div>
        `
            });
    console.log(users);
})
.catch((error) =>{
console.log(error);
})


