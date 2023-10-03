/**
 * Obtiene el mayor número de los parámetros recibidos utilizando `if/else`
 * @param {number} n1 Número 1
 * @param {number} n2 Número 2
 * @param {number} n3 Número 3
 * @param {number} n4 Número 4
 * @returns El número mayor de los 4 valores recibidos
 */
const mayorEntre4v1 = (n1, n2, n3, n4) => {
  let mayor = 0;
  if (n1 > n2) {
    if (n1 > n3) {
      if (n1 > n4) {
        mayor = n1;
      } else {
        mayor = n4;
      }
    } else {
      if (n3 > n4) {
        mayor = n3;
      } else {
        mayor = n4;
      }
    }
  } else {
    if (n2 > n3) {
      if (n2 > n4) {
        mayor = n2;
      } else {
        mayor = n4;
      }
    } else {
      if (n3 > n4) {
        mayor = n3;
      } else {
        mayor = n4;
      }
    }
  }
  return mayor;
};

module.exports = mayorEntre4v1;
