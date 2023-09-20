let elementos = [10, 20, 30, 40, 50];
console.log(elementos);

// Retorna un boolean. Verifica si TODOS los elementos del arreglo cumplen con una condición
let todos = elementos.every((elemento) => elemento > 0);
console.log(todos);

// Retorna un boolean. Verifica si ALGUN elemento del arreglo cumple la condición
let alguno = elementos.some((elemento) => elemento > 25);
console.log(alguno);

// Filtra los elementos de un arreglo -> Retorna un arreglo
let filtrados = elementos.filter((elemento) => elemento > 25);
console.log(filtrados);

let sinEliminar = elementos.filter(
  (elemento) => elemento >= 20 && elemento < 45
);
console.log(sinEliminar);
