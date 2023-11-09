/**
 * Obtiene el mayor número de los parámetros recibidos utilizando `if` con condicionales AND `&&`.
 * @param {number} n1 Número 1
 * @param {number} n2 Número 2
 * @param {number} n3 Número 3
 * @param {number} n4 Número 4
 * @returns El número mayor
 */
const mayorEntre4v2 = (n1, n2, n3, n4) => {
  if (n1 >= n2 && n1 >= n3 && n1 >= n4) return n1;
  if (n2 >= n1 && n2 >= n3 && n2 >= n4) return n2;
  if (n3 >= n1 && n3 >= n2 && n3 >= n4) return n3;
  if (n4 >= n1 && n4 >= n2 && n4 >= n3) return n4;
};

module.exports = mayorEntre4v2;
