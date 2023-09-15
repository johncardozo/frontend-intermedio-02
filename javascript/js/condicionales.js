// 1 OPCIÓN -> IF
let x = 5;

if (x > 3) {
  console.log("Entró al if 1");
}

if (x === 4) {
  console.log("Entró al if 2");
}

if (x <= 10) {
  console.log("Entró al if 3");
  let y = 5;
  if (y >= 15) {
    console.log("Entro al if interno 4");
    if (x === 5 && y === 5) {
      console.log("Entro al último if");
    }
  }
}

// 2 OPCIONES -> IF/ELSE
let edad = 15;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// n OPCIONES -> IF/ELSE IF
let dia = 5;
if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miércoles");
} else {
  console.log("No es lunes, ni martes, ni miércoles");
}

// ---- EJERCICIO ----
// Dada una variable edad, mostrar por consola
// los siguientes datos:
// No ha nacido, si la edad es cero
// Niño, si la edad está entre 1 y 10
// Adolescente, si la edad está entre 11 y 17
// Adulto, si la edad está entre 18 y 69
// Tercera edad, si la edad es mayor a 70
// Ni no es alguna de las edades, mostrar error
let age = 0;
const t0 = performance.now();
if (age === 0) {
  console.log("No ha nacido");
} else if (age >= 1 && age <= 10) {
  console.log("Niño");
} else if (age >= 11 && age <= 17) {
  console.log("Adolescente");
} else if (age >= 18 && age <= 69) {
  console.log("Adulto");
} else if (age > 70) {
  console.log("Tercera edad");
} else {
  console.error("La edad no es válida!");
}
const t1 = performance.now();
console.log(`1er algoritmo: ${t1 - t0}`);

const t3 = performance.now();
if (age === 0) {
  console.log("No ha nacido");
}
if (age >= 1 && age <= 10) {
  console.log("Niño");
}
if (age >= 11 && age <= 17) {
  console.log("Adolescente");
}
if (age >= 18 && age <= 69) {
  console.log("Adulto");
}
if (age > 70) {
  console.log("Tercera edad");
}
if (age < 0) {
  console.error("La edad no es válida!");
}
const t4 = performance.now();
console.log(`2do algoritmo: ${t4 - t3}`);

// Cuando sólo es una instrucción no se necesitan corchetes
if (age === 0) console.log("No ha nacido");
if (age >= 1 && age <= 10) console.log("Niño");
if (age >= 11 && age <= 17) console.log("Adolescente");
if (age >= 18 && age <= 69) console.log("Adulto");
if (age > 70) console.log("Tercera edad");
if (age < 0) console.error("La edad no es válida!");

// Expresión ternaria - if/else
let mensaje1 = "";
if (age > 18) {
  mensaje1 = "Adulto";
} else {
  mensaje1 = "Menor de edad";
}
let mensaje2 = age > 18 ? "Adulto" : "Menor de edad";
console.log(mensaje1, mensaje2);

const LUNES = 1;
const MARTES = 2;
const MIERCOLES = 3;
const JUEVES = 4;
const VIERNES = 5;

// Switch
dia = 6;
switch (dia) {
  case LUNES:
    console.log("Lunes");
    break;
  case MARTES:
    console.log("Martes");
    break;
  case MIERCOLES:
    console.log("Miércoles");
    break;
  case JUEVES:
    console.log("Jueves");
    break;
  case VIERNES:
    console.log("Viernes");
    break;
  default:
    console.log("No es un día laboral");
    break;
}

// RECOMENDACIONES DE CALIDAD DEL CÓDIGO
// 1. Variables sean descriptivas
// 2. Comentarios -> Code tells you how, comments tells you why
// 3. Identación
