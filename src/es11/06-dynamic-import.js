//Mejor forma de importar y puede ayudar a renderizar nuestra pagina mas rapido

const button = document.getElementById('btn');

button.addEventListener('click', async function(){
  const module = await import('./module.js');
  console.log(module);
  module.hello();
})