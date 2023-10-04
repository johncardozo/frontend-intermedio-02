// ------ TIPOS IMPLICITOS ---------

// Declaración de arreglo
let heroes = ["superman", "batman", "aquaman"];

// No permite asignación de tipos distintos
heroes.push("wonder woman");
heroes[0] = "The Flash";

// Inicialización del arreglo con tipo String y Number
let notas = ["Catalina", 3.5, "Valeria", 4.5, "Luciana", 4];
notas.push(2);
notas.push("Emilio");
// Genera un error
//notas.push(true)

// ------ TIPOS EXPLICITOS ---------
let juegos: string[] = [];

juegos.push("Super Mario");
// Genera error
//juegos.push(3);

// Declaración de arreglos con Union
let grades: (string | number)[] = [];
grades.push("Martha");
grades.push(20);
grades.push(3.45);
// Genera un error
//grades.push(false);

let mutante: string | number | boolean;
mutante = "abc";
mutante = 2;
console.log(mutante);

let mezcla: (string | number | boolean)[] = [];
mezcla.push("abc");
mezcla.push(2);
console.log(mezcla);

// --------- TUPLES -----------
// Permiten tipos en posiciones específicas
let tup: [string, number, boolean] = ["Maria", 22, true];

// Modifica todo el arreglo
tup = ["Valeria", 10, true];
// Genera error
//tup = ["Luciana", true, true];

// Modifica una posición del arreglo
tup[0] = "Emilio";
tup[1] = 13;
// Genera error
// tup[0] = true;

let tup2: [boolean, number] = [true, 10];

// Permite agregar tipos de datos válidos según la definición
tup2.push(false);
tup2.push(20);
tup2.push(100);
tup2.push(200);
console.log(tup2);
