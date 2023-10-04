/**
 * Calcula el área del círculo dado su radio.
 * @param radio Radio del círculo
 * @returns Área del círculo
 */
const areaCirculo = (radio: number): number => {
  return Math.PI * Math.pow(radio, 2);
};

// Se deben proveer los argumentos acorde a los tipos de datos de la función
let a1 = areaCirculo(30);

// Genera un error
//let a2: string = areaCirculo(5);

const mensaje1 = (numero1: number, numero2: number | string) => {
  console.log(numero1);
  console.log(numero2);
};

// Parámetros de tipo Union
mensaje1(20, "hi");

// Parámetros con valor por default
const mensaje2 = (parametro1: number = 10) => {
  console.log(parametro1);
};

// Valor explícito para el parámetro
mensaje2(2);
// El argumento toma el valor por default
mensaje2();

// Parámetro opcional
const mensaje3 = (numero1: number, numero2?: number) => {
  console.log(numero1);
  console.log(numero2);
};

mensaje3(10, 20);
mensaje3(100);

// Función con parámetro opcional
const mensaje4 = (numero1: number, numero2: string | number = 5000) => {
  console.log(numero1);
  console.log(numero2);
};

mensaje4(1000, 2000);
mensaje4(1000, "hello");
mensaje4(1000);

const mensaje5 = (numero1: number, numero2?: string | number) => {
  console.log(numero1);
  if (typeof numero2 === "undefined") {
    console.log("???");
  } else {
    console.log(numero2);
  }
};

mensaje5(100, 100);
mensaje5(100, "100");
mensaje5(100);
