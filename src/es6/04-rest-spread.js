//Dostructuracion

//Arrays
//Se puede destructurar, asignando los objetos a una variable, aveces puede ser confuso seleccionarlos desde el array
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);


//Objetos: se asigna a una variable y se especifica de donde lo trae
let user = {username: 'Felipe', age: 30};
let {username, age} = user;
console.log(username, user.age);

//Spread operater
let person = {name: 'Felipe', age:30};
let country = 'Col';

let data = {id:1,...person, country};
console.log(data);

//rest
function sum(num, ...values){
  console.log(values)
  console.log(num + values[0])
  return num + values[0]
}

sum (1, 1 , 2, 3)