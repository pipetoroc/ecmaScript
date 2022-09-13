//Ayuda a validar que llamemos u obtengamos el valor que queremos

const users = {
  pipetoroc: {
    country: 'Col'
  },
  ana: {
    ccuntry: 'Mx'
  }
}
// console.log(users.pipetoroc.country)
// console.log(users.pipetoroc.age) // no existe este valor (undefined)

console.log(users?.developer?.country)//entregara un undefined sin presentar error o romper la aplicacion