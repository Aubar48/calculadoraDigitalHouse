const multiplicar = (numA, numB) => {
  return (numA === 0 || numB === 0) 
    ? (console.log("No se puede multiplicar por cero".green)) 
    : `${numA * numB}`;
}
  
  module.exports = multiplicar;
