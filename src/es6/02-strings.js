//Template literals
let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase)

//Template literals

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);


//Multi-line strings
let lorem = 'esto es un string \n ' + 'esto es otra linea';

//Usando comillas francesas es posible realizar saltos de linea
let lorem2 = `Esta es una frase epica
la continuacion de la misma frase epica`;

console.log(lorem)
console.log(lorem2)