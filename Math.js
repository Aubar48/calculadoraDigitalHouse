console.log(sumar())
function sumar(numA, numB){
    return numA + numB
}




 const restar = function(numA,numB){
     return `${numA-numB}`
 }

 console.log(restar());

 const multiplicar = (numA, numB) => {
    return (numA === 0 || numB === 0) 
      ? (console.log("No se puede multiplicar por cero".green)) 
      : `${numA * numB}`;
  }

  console.log(multiplicar());

  const dividir = (numA, numB) => {
    if (numA === 0 || numB === 0) {
      console.log("No se puede dividir por cero".green);
      return null;
    }
    return `${numA / numB}`;
  }

  console.log(dividir());

  