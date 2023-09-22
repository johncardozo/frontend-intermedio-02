import { adding, multiplication } from "./libreria.js";
import { DIAS_ANIO, DIAS_SEMANA } from "./constantes.js";

const resultado1 = adding(10, 20);
const resultado2 = multiplication(10, 20);
console.log(resultado1);
console.log(resultado2);

const resultado3 = DIAS_ANIO * DIAS_SEMANA;
console.log(resultado3);
