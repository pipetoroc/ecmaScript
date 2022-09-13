//Manejo de numeros grandes en JS, anteriormente se agregaba la letra n al final del numero ahora se le asigna con es metodo de BigInt
const aBigNumber = 2993248234908128n;
const anotherBigNumber = BigInt(2993248234908128);
console.log(aBigNumber);
console.log(anotherBigNumber);