//Flat devuelve una matriz de cualquier sub-matriz
const array = [1, 1, 2 ,2 ,2, [2,3,3,3,[3,3,3]]];
console.log(array.flat(2))

// flatmap: Retorna el valor del array y su modificacion deacuerdo a la funcion que se le pasa
const array2 = [1, 2, 4, 4, 4, 4];
console.log(array2.flatMap(v => [v, v*2]));