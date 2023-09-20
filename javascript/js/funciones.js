// Definición de una función
function mensaje() {
  console.log("%cFrontend Intermedio", "color: red;");
}

// Definición de función con parámetros
function mensajeConColor(color) {
  const css = `color: ${color}`;
  console.log("%cFrontend Intermedio", css);
}

function mensajeTextoColor(texto, color) {
  const css = `color: ${color}; border: 1px solid ${color}; padding: 3px; border-radius: 3px;`;
  const mensaje = `%c${texto}`;
  console.log(mensaje, css);
}

// Invocar/ejecutar una función
mensaje();
mensaje();
// Invocar/ejecutar una función con parámetros
mensajeConColor("red");
mensajeConColor("yellow");
mensajeConColor("cyan");
mensajeConColor("salmon");

mensajeTextoColor("Backend", "lime");
mensajeTextoColor("Frontend", "orange");
mensajeTextoColor("Database", "#fff");
