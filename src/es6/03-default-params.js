//parametros por defecto
function newUser (name, age, country){
  var name = name || 'Felipe';
  var age = age || 30;
  var country = country || 'Col'
  console.log(name, age, country)
}

newUser();
newUser('Carlos', 22, 'MX');

//Se pasan los parametros en la declaracion de la funcion, como argumentos y es mas facil de leer y entender
function newAdmin (name = 'Felipe', age = 22, country = 'Col'){
  console.log(name, age, country)
}

newAdmin();
newAdmin('Ana', 23, 'Chile')