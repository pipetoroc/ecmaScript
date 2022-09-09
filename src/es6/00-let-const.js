// Cuando declaramos e inicializamos variables con var o let, es posible reasignarlas
var lastName = 'Felipe';
lastName = 'David';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//Si declaramos variables usando const, no se puede reasignar, hacerlo resultaria en un error
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

//Analizando scope
const fruits = () => {
  if (true) {
    var fruit1 = 'Apple';// function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; //block scope
  }
  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}
fruits()