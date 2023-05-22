console.clear()
const preFront = require('./preFront.js')

const sumar = require('./sumar.js');
const restar = require('./restar.js');
const multiplicar = require('./multiplicar.js');
const dividir = require('./dividir.js');



const colors = require('colors');
colors.enable();

const argv = require('process').argv;
const select = argv[2];
const numA = +argv[3];
const numB = +argv[4];


switch (select) {
  case "sumar":
  case "+":
    resultado = sumar(numA, numB);
    console.log (colors.green(`El resultado de ${select} es: ${resultado}`));
    break;
  case "restar":
  case "-":
    resultado = restar(numA, numB);
    console.log (colors.green(`El resultado de ${select} es: ${resultado}`));
    break;
  case "multiplicar":
  case "*":
    resultado = multiplicar(numA, numB);
    console.log (colors.green(`El resultado de ${select} es: ${resultado}`));
    break;
  case "dividir":
  case "/":
    resultado = dividir(numA, numB);
    console.log (colors.green(`El resultado de ${select} es: ${resultado}`));
    break;
  default:
    console.log('Por favor solo opciones o simbolos: sumar + , restar -, multiplicar *, dividir /'.green);
    break;
}




