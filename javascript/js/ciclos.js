// --- CICLOS ---
// 1. Inicialización
// 2. Evaluación de la expresión booleana
// 3. Ejecución de instrucciones
// 4. Instrucción de rompimiento

// WHILE: Repetición de instrucciones
let contador = 0; // 1
while (contador < 5) {
  // 2
  console.log(`WHILE: El valor del contador es ${contador}`); // 3
  contador++; // 4
}

// DO/WHILE: Repetición de instrucciones, al menos ejecuta el ciclo una vez
contador = 0; // 1
do {
  console.log(`DO/WHILE: El valor del contador es ${contador}`); // 3
  contador++; // 4
} while (contador < 5); // 2

// FOR: Recorrer arreglos (casi siempre)
// 1, 2, 4
for (contador = 0; contador < 5; contador++) {
  console.log(`FOR: El valor del contador es ${contador}`); // 3
}

// EJERCICIO: Imprimir números PARES desde un valor "inicio" hasta "fin"
// Ej. inicio = 1, fin = 10
// 2, 4, 6, 8, 10

// Ej. inicio= 12, fin = 19
// 12, 14, 16, 18

console.log("SOLUCION 1");
let inicio = 1;
let fin = 10;
contador = inicio;
while (contador <= fin) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador++;
}

console.log("SOLUCION 2");
contador = inicio % 2 === 0 ? inicio : inicio + 1;
while (contador <= fin) {
  console.log(contador);
  contador += 2;
}
