// Declaración de variable antes de ES6
var nombre = "Cata";
console.log(nombre);

// Declaración de variable con ES6
let apellido = "Cardozo";
console.log(apellido);

// Let tiene alcance (scope) local
// var tiene alcance (scope) global
if (nombre == "Cata") {
  var x = 5;
  let y = 6;
  console.log(x);
  console.log(y);
}

console.log(x);
//console.log(y);

// Declaración de constante
const diasSemana = 7;
// No se puede cambiar el valor de una constante
//diasSemana = 5;
console.log(diasSemana);

// String
let cadena = "Javascript";
// Numérico
let entero = 4;
let real = 3.14;
// Booleano -> true | false
let booleano = true;

// typeof = obtiene el tipo de la variable
console.log(cadena, typeof cadena);
console.log(entero, typeof entero);
console.log(real, typeof real);
console.log(booleano, typeof booleano);

// Javascript tiene datos de variables dinámicos
let variable = "javascript";
console.log(variable, typeof variable);
variable = 10;
console.log(variable, typeof variable);
