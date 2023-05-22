const dividir = (numA, numB) => {
    if (numA === 0 || numB === 0) {
      console.log("No se puede dividir por cero".green);
      return null;
    }
    return `${numA / numB}`;
  }
  module.exports = dividir;