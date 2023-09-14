let frase1 = "Frontend Intermedio";
console.log(frase1);

let frase2 = "I don't know";
console.log(frase2);

let frase3 = 'Él dijo: "Adiós"';
console.log(frase3);

// Caracteres de escape: \' \" \n \t
let frase4 = "Primer renglón\nSegundo renglón";
console.log(frase4);

let frase5 = "Backend\t\tIntermedio\nFullstack\tBásico\nFrontend\tAvanzado";
console.log(frase5);

// Concatenación
let pelicula = "Star " + "Wars";
console.log(pelicula);

pelicula += ": The Return of the Jedi";
console.log(pelicula);

let year = 1983;
pelicula = pelicula + " - " + year;
console.log(pelicula);

// Convertir String a Number
let num1 = "23";
let num2 = "20";

let res1 = num1 + num2;
console.log(res1, typeof res1);

let valor1 = parseInt(num1);
let valor2 = parseInt(num2);
res2 = valor1 + valor2;
console.log(res2, typeof res2);

// Acceder a posiciones del string
// M E S A -> longitud = 4
// 0 1 2 3
let primero = pelicula[1];
console.log(primero);
// Los strings son inmutables
pelicula[1] = "X";
console.log(pelicula);

// Genera un valor undefined
console.log(pelicula[100]);

// Longitud de string
console.log(pelicula.length);
let ultimo = pelicula[pelicula.length - 1];
console.log(ultimo);

// Templates y literales
let nombre = "Catalina";
let edad = 21;

let mensaje1 = "La estudiante " + nombre + " \ntiene " + edad + " años";
console.log(mensaje1);

let mensaje2 = `La estudiante ${nombre} 
tiene ${edad} años`;
console.log(mensaje2);

let mensaje3 = `El resultado es ${20 * 2}`;
console.log(mensaje3);
