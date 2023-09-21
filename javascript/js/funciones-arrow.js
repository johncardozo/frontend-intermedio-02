// Arrow function
const mensaje2 = () => console.log("Hello");

// classic function
function mensaje1() {
  console.log("Hello");
}

mensaje1();
mensaje2();

// Classic function
function sumar1(num1, num2) {
  const res = num1 + num2;
  return res;
}

// Arrow function
const sumar2 = (num1, num2) => {
  const res = num1 + num2;
  return res;
};

// Retorna el valor depues de la flecha
const sumar3 = (num1, num2) => num1 + num2;
