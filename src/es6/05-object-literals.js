// ES5 se asignaba y debia pasarse el mismo parametro
function newUser(user, age, country){
  return {
    user: user,
    age: age,
    country: country,
  }
}

//ES6 acepta los parametros sin tener que pasarlos 2 veces, tambien se puede usar la sintaxis de E5
function newUser(user, age, country){
  return {
    user,
    age,
    country,
  }
}

console.log(newUser('pipe', 30, 'col'))