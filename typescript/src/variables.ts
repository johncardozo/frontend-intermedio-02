// Declaración de variables de tipos básicos
let edad: number;
let nombre: string;
let esAdulto: boolean;

// Asignación de valor
edad = 1;
nombre = "Catalina";
esAdulto = true;

console.log(edad);
console.log(nombre);
console.log(esAdulto);

// Tipo Union: permite varios tipos de dato
let identificador: string | number;
identificador = 2;
console.log(identificador);

identificador = "123";
console.log(identificador);

// Alias de un Union
type StringOrNumber = string | number;

// Variable con alias
let variable: StringOrNumber;
variable = 200;
console.log(variable);

variable = "200";
console.log(variable);

// Arreglo con alias
let arreglo: StringOrNumber[];

// Propiedad de objeto con alias
let objeto: {
  propiedad: StringOrNumber;
};

// Función con parámetro alias
const funcion = (parametro: StringOrNumber) => {
  console.log(parametro);
};
