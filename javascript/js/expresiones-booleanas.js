// Expresiones booleanas -> true | false

// Mayor >
console.log("5 > 5 : ", 5 > 5);
// Mayor o igual >=
console.log("5 >= 5 : ", 5 >= 5);
// Menor <
console.log("5 < 5 : ", 5 < 5);
// Menor o igual <=
console.log("5 <= 5 : ", 5 <= 5);
// Igual ==
console.log("5 == 5 : ", 5 == 5);
console.log('5 == "5" : ', 5 == "5");
// Igual teniendo en cuenta el tipo de dato ===
console.log('5 === "5" : ', 5 === "5");
// Diferente !==
console.log("5 != 5 : ", 5 != 5);
console.log('5 !== "5" : ', 5 !== "5");
// Negación !
console.log(true);
console.log(!true);

// Operadores lógicos
// AND -> && (doble ampersand) -> Todas deben ser true
// T && T -> T
// T && F -> F
// F && T -> F
// F && F -> F
console.log(5 === 5 && 6 !== 7);
console.log(4 > 6 && 5 === 5);
console.log(4 > 6 && 5 === 6);

// OR -> || (doble pipe) -> Al menos una debe ser true
// T || T -> T
// T || F -> T
// F || T -> T
// F || F -> F
console.log(5 === 5 || 4 === 4);
console.log(5 === 6 || 4 === 4);
console.log(5 === 6 || 10 === 11);
