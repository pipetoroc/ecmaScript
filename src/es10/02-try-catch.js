try{
  hello();
} catch (error){
  console.log(error);
}


//se puede personalizar los errores pero no es muy recomendable
try {
  anotherFn();
}catch {
  console.log('Esto es un error')
}