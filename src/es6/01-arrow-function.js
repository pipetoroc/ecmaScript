//funcion comun
function square(num){
  return num * num;
}

//arrow function: expresion compacta de funcion pero no se puede usar en todas las situaciones
const square = (num) =>{
  return num * num;
}

//arrow function: Si solo se tiene un argumento se pueden obviar los parentesis
const square = num => num * num;