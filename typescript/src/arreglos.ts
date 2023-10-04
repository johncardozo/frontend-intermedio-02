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
// Genera un error
//grades.push(false);
