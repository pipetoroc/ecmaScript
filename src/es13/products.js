import fetch from "node-fetch";//se importa el recurso de fetch de npm y poder usarlo en el proyecto

const response = await fetch('https://api.escuelajs.co/api/v1/products');//fetch permite llamar a la api
const products = await response.json();//lo que recibimes lo transformamos en un archivo json

export {products};