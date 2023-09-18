// Declaración de arreglos (listas)
let elementos1 = []; // Arreglo vacío
let elementos2 = [10, 20, 30]; // Arreglo con elementos
let elementos3 = ["uno", 50, 3.1416, true]; // Varios tipos

console.log(elementos1, elementos1.length);
console.log(elementos2, elementos2.length);
console.log(elementos3, elementos3.length);

// Acceso a través del índice
console.log(elementos3[1]);
const variable1 = elementos3[2];
console.log(variable1);
console.log(elementos3[5]); // undefined

// Modifica el valor de una posición del arreglo
elementos3[0] = "one";
console.log(elementos3);

// Modifica una posición que no existe.
// Agrega elementos undefined para rellenar los datos faltantes
elementos3[10] = 23;
console.log(elementos3);
console.log(elementos3[4]);
console.log(elementos3.length);

// Dos variables que apuntan al mismo sitio en memoria
let notas1 = [10, 20, 30]; // Declaración de arreglo 1
let notas2 = notas1; // "Obtiene una copia de arreglo 1"
notas2[0] = 100; // Modifica la "copia"
console.log(notas1);
console.log(notas2);

// Spread operator -> ...
let notas3 = [100, 200, 300];
let notas4 = [...notas3]; // Genera una copia con spread operator
let notas5 = notas3.slice(); // Genera una copia con la función slice
notas4[0] = 3000;
notas5[0] = 5000;
console.log(notas3);
console.log(notas4);
console.log(notas5);

// Split es una función de Strings
let mensaje = "La casa es bonita";
let palabras = mensaje.split(" ");
console.log(palabras);
let respuesta = "2023-09-23#WM#FAN#MAL#GEN";
let datos = respuesta.split("#");
console.log(datos);
console.log(`El crucero es ${datos[2]}`);
