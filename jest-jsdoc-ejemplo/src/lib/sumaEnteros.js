/**
 * Calcula la suma entre 2 valores usando ciclos
 * @param {number} inicio Número inicial
 * @param {number} fin Número final
 * @returns Suma entre el número inicial y el número final
 */
const sumaEnterosv1 = (inicio, fin) => {
  let suma = 0;
  for (let contador = inicio; contador <= fin; contador++) {
    suma += contador;
  }
  return suma;
};

/**
 * Calcula la suma entre 2 valores usando la fórmula n(n+1) /2
 * @param {number} inicio Número inicial
 * @param {number} fin Número final
 * @returns Suma entre el número inicial y el número final
 */
const sumaEnterosv2 = (inicio, fin) => {
  const formula1 = ((inicio - 1) * inicio) / 2;
  const formula2 = (fin * (fin + 1)) / 2;
  const suma = formula2 - formula1;
  return suma;
};

module.exports = { sumaEnterosv1, sumaEnterosv2 };
