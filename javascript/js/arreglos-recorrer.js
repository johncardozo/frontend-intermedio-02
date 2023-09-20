// Declaración del arreglo
let elementos = [10, 20, 30];

// Recorrer arreglo con WHILE
let contador = 0;
while (contador < elementos.length) {
  console.log(elementos[contador]);
  contador++;
}

// Recorrer arreglo con FOR
for (let i = 0; i < elementos.length; i++) {
  console.log(elementos[i]);
}

// Recorrer arreglo con "for of"
for (const elemento of elementos) {
  console.log(elemento);
}

// Recorrer arreglo con "for in"
for (const key in elementos) {
  console.log(elementos[key]);
}

// Recorrer un arreglo con la función forEach
elementos.forEach((elemento) => console.log(elemento));
