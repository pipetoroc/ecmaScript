//Permite convertir de array a objetos, similar a entries el metodo de arrays

const entries = new Map([['name', 'oscar'], ['age', 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));