// Declaración de arreglo
let elementos = [10, 20, 30];
console.log(elementos);

// ---- AGREGAR ------
// Agregar un elemento al inicio
elementos.unshift(50);
console.log(elementos);

// Agregar un elemento al final
elementos.push(80);
console.log(elementos);

// Insertar un elemento en una posición
// posición, borrar 0 elementos, valor
elementos.splice(2, 0, 200);
console.log(elementos);

// ---- ELIMINAR ------
// Eliminar el primer elemento
elementos.shift();
console.log(elementos);

// Eliminar el último elemento
elementos.pop();
console.log(elementos);

// Eliminar un elemento dada su posición
// posición, cantidad de elementos a eliminar
elementos.splice(1, 2);
console.log(elementos);

// ---- OTRAS FUNCIONES -----
// Concatena 2 arreglos
let elementos2 = [1_000, 2_000];
let respuesta1 = elementos.concat(elementos2);
console.log(elementos);
console.log(elementos2);
console.log(respuesta1);

// Genera de cadena de caracteres con un delimitador
let respuesta2 = respuesta1.join();
console.log(respuesta2);
console.log(typeof respuesta2);
let respuesta3 = respuesta1.join("+");
console.log(respuesta3);

// Obtener la primera posición (índice) de un elemento en el arreglo
let notas1 = [10, 20, 30, 40, 20, 60];
let posicion1 = notas1.indexOf(4);
console.log(posicion1);
if (posicion1 === -1) {
  console.log("No se encontró el elemento");
}

// Obtener la última posición (índice) de un elemento en el arreglo
let notas2 = [10, 20, 10, 30];
let posicion2 = notas2.lastIndexOf(20);
console.log(posicion2);

// Obtiene TODAS las posiciones de un elemento en un arreglo
// Palabra reservada que permite depurar/debug el código
//debugger;
let posiciones = [];
let index = 0;
while (index < notas2.length) {
  if (notas2[index] === 10) {
    posiciones.push(index);
  }
  index++;
}
console.log(notas2);
console.log(posiciones);

let elements = [10, 20, 30];

// Aplica un función a cada elemento del arreglo generando un valor
let suma = elements.reduce((x, y) => x + y); // ES6
console.log(suma);

// Aplica una función a cada elemento generando un nuevo arreglo
let res2 = elements.map((elemento) => elemento * 2);
console.log(elements);
console.log(res2);

let notas = [2, 4, 4.1, 1.2, 2.5, 5, 0.5, 2.8];
let curva = notas.map((nota) => (nota < 3 ? nota + 0.2 : nota));
console.log(notas);
console.log(curva);

// Ordenar un arreglo
let ordenadas = curva.sort();
console.log(ordenadas);
