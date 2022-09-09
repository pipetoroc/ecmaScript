const anotherFunction = () => {
  return new Promise ((resolve, reject) =>{
      if(false){
    resolve('Yeah buddy')
  }else{
    reject('Paila')
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))