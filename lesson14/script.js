// async function name(params) {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json('')
//    return users.map((u) => u.name);
   

// }
// console.log(name());
// name();

// async function getUsers {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         if
//     }
    
//  }

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) throw new Error("Сервер катасы: " + response.status);
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Ката чыкты:", error.message);
//   }
// }

// getUsers();


// async function name(params) {
// try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//  const users = await res.json('');
//  console.log = users.map((u) => u.name);
// }catch (error) {
//     console.log("Ката чыкты:", error);
// }       
// getUsers();
// }  



async function name() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json('')
    console.log(users);
}
name()



async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/user");
    if (!response.ok) throw new Error("Сервер катасы: " + response.status);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Ката чыкты:", error.message);
  }
}

getUsers();