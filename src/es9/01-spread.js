//Admite el uso de spread y rest en objetos
const user = {username:  'pipetoroc', age:30, country:'Colombia'};
const {username, ...values}=user;//saca username y lo demas lo envia a values
console.log(user);
console.log(values);

//Es de utilidad cuando se requiere transformar objetos