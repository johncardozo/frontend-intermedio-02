/**
 * Obtiene el mayor número de los parámetros recibidos, creando un arreglo con los valores y recorriendo dicho arreglo.
 * @param {number} n1 Número 1
 * @param {number} n2 Número 2
 * @param {number} n3 Número 3
 * @param {number} n4 Número 4
 * @returns El número mayor
 */
const mayorEntre4v3 = (n1, n2, n3, n4) => {
  const numeros = [n1, n2, n3, n4];
  let mayor = n1;
  for (let index = 1; index < numeros.length; index++) {
    if (numeros[index] > mayor) {
      mayor = numeros[index];
    }
  }
  return mayor;
};

module.exports = mayorEntre4v3;
