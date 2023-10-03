const { sumaEnterosv1, sumaEnterosv2 } = require("../lib/sumaEnteros");
const data = require("../data/datos.json");

test("Probando 5 y 10: 45", () => {
  const inicio = 5,
    fin = 10,
    resultado = 45;
  expect(sumaEnterosv1(inicio, fin)).toBe(resultado);
  expect(sumaEnterosv2(inicio, fin)).toBe(resultado);
});
test("Probando 8 y 18: 143", () => {
  const inicio = 8,
    fin = 18,
    resultado = 143;
  expect(sumaEnterosv1(inicio, fin)).toBe(resultado);
  expect(sumaEnterosv2(inicio, fin)).toBe(resultado);
});
test("Probando 51 y 54: 210", () => {
  const inicio = 51,
    fin = 54,
    resultado = 210;
  expect(sumaEnterosv1(inicio, fin)).toBe(resultado);
  expect(sumaEnterosv2(inicio, fin)).toBe(resultado);
});
test("Probando 28 y 43: 568", () => {
  const inicio = 28,
    fin = 43,
    resultado = 568;
  expect(sumaEnterosv1(inicio, fin)).toBe(resultado);
  expect(sumaEnterosv2(inicio, fin)).toBe(resultado);
});
test("Probando 2001 y 2023: 46276", () => {
  const inicio = 2001,
    fin = 2023,
    resultado = 46276;
  expect(sumaEnterosv1(inicio, fin)).toBe(resultado);
  expect(sumaEnterosv2(inicio, fin)).toBe(resultado);
});
test("Probando un set de datos", () => {
  for (const item of data) {
    const inicio = parseInt(item.inicio);
    const fin = parseInt(item.fin);
    const resultado = parseInt(item.resultado);
    expect(sumaEnterosv1(inicio, fin)).toBe(resultado);
    expect(sumaEnterosv2(inicio, fin)).toBe(resultado);
  }
});
