const mayorEntre4v4 = require("../lib/lib4");

test("v4 - El mayor es n1", () => {
  const mayor = mayorEntre4v4(500, 400, 300, 200);
  expect(mayor).toBe(500);
});
test("v4 - El mayor es n2", () => {
  const mayor = mayorEntre4v4(400, 500, 300, 200);
  expect(mayor).toBe(500);
});
test("v4 - El mayor es n3", () => {
  const mayor = mayorEntre4v4(400, 300, 500, 200);
  expect(mayor).toBe(500);
});
test("v4 - El mayor es n4", () => {
  const mayor = mayorEntre4v4(400, 300, 200, 500);
  expect(mayor).toBe(500);
});
