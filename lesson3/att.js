//  условия оператора if swich/case

// let email = promt ('ведите ваш email');
//  let pasword = promt ('ведите ваш возраст');
// let userEmail = 'админ'
// let userPasswod = 'admin11'
// if (email === userEmail && password === userpassword){
//    alert( "вы успешно вошли вы систему" )
// }else{
    // alert ("  не верный логин или пароль")
// }

// let  distriсt = prompt ("ведите название района");
// switch(distriсt){
    // case "аламудин район ":
    // case "сокулук район":
// case "ысыката району":
    // alert('чуй область')    
    // break;

    

    // default:
    // alert(' ');
// }
let month = prompt("назавите любой область");
switch (month) {
  case "алай":
  case "араван":
  case "кара-кулджа":
  case "кара-суу":
  case "ноокат":
  case "узген":
  case "чон-алай":
    alert("ош");
    break;
  case "баткен":
  case "кадамжай":
  case "лейлекс":
    alert("баткен");
    break;
  case "Ак-Талин":
  case "Ат-Баши":
  case "Жумгаль":
  case "Кочкор":
  case "Нарын":
    alert("нарын");
    break;
  case "аламудун":
  case "жайыл":
  case "кемин":
  case "московский":
  case "панфилов":
  case "сокулук":
  case "чуй":
  case "ысык-ата":
    alert("чуй");
    break;
  case "аксы":
  case "ала-бука":
  case "базар-коргон":
  case "ноокен":
  case "сузак":
  case "тогуз-торой":
  case "токтогул":
  case "чаткал":
    alert("манас");
    break;
  case "ак-суу":
  case "жети-огуз":
  case "иссык-коль":
  case "тон":
  case "тюп":
    alert("ысык кол");
    break;
  case "бакай-ата":
  case "кара-буура":
  case "манас":
  case "талас":
    alert("талас");
    break;
  default:
    alert("такого областья нету в списке");
}


