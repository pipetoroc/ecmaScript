//funcion que va a retornar una serie de valores de acuerdo a lo solicitado, se identifica con un asterisco
function* iterate(array){
  for (let element of array){
    yield element;//palabra reservada que retorna los valores
  }
}

const it = iterate(['Felipe', 'David', 'Carlos', 'Pedro']);// se llama la funcion
console.log(it.next().element);//entra al array y recuerda el estado, va a entrar a cada valor de acuerdo a lo solicitado
console.log(it.next().element);
console.log(it.next().element);
console.log(it.next().element);
console.log(it.next().element);
