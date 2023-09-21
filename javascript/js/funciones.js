// Definición de una función
function mensaje() {
  console.log("%cFrontend Intermedio", "color: red;");
}

// Definición de función con parámetros
function mensajeConColor(color) {
  const css = `color: ${color}`;
  console.log("%cFrontend Intermedio", css);
}

function sumar(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

/**
 * Calcula el área del triángulo dada su base y su altura
 * @param {number} base Base del triángulo
 * @param {number} altura Altura del triángulo
 * @returns El área de un triángulo
 */
function areaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

/**
 * Muestra un mensaje en la consola del DevTools con un color css
 * @param {string} texto Mensaje a mostrar
 * @param {string} color Color CSS
 */
function mensajeTextoColor(texto, color) {
  const css = `color: ${color}; border: 1px solid ${color}; padding: 3px; border-radius: 3px;`;
  const mensaje = `%c${texto}`;
  console.log(mensaje, css);
}

// Invocar/ejecutar/usar una función
mensaje();
mensaje();
// Invocar/ejecutar/usar una función con parámetros
mensajeConColor("red");
mensajeConColor("yellow");
mensajeConColor("cyan");
mensajeConColor("salmon");

let letras = "backend";
let color1 = "red";
mensajeTextoColor(letras, color1);
mensajeTextoColor("Frontend", "orange");
mensajeTextoColor("Database", "#fff");
mensajeTextoColor(letras, "cyan");

let s = 0;
s = sumar(20, 30);
console.log(s);

// Pasando una función como parámetro a otra función
console.log(sumar(20, 20));

mensajeTextoColor(sumar(100, 200), "yellow");

mensajeTextoColor(
  `El area del triángulo es ${areaTriangulo(10, 2)}`,
  "GreenYellow"
);
