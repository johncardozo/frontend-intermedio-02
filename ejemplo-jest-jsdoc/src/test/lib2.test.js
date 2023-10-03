const mayorEntre4v2 = require("../lib/lib2");

test("v2 - El mayor es n1", () => {
  const mayor = mayorEntre4v2(500, 400, 300, 200);
  expect(mayor).toBe(500);
});
test("v2 - El mayor es n2", () => {
  const mayor = mayorEntre4v2(400, 500, 300, 200);
  expect(mayor).toBe(500);
});
test("v2 - El mayor es n3", () => {
  const mayor = mayorEntre4v2(400, 300, 500, 200);
  expect(mayor).toBe(500);
});
test("v2 - El mayor es n4", () => {
  const mayor = mayorEntre4v2(400, 300, 200, 500);
  expect(mayor).toBe(500);
});
