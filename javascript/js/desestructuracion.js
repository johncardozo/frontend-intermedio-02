console.log("Destructuring");

// Definición de objeto
let coordenada = {
  latitud: 4, // propiedad
  longitud: 6, // propiedad
};

// Acceso tradicional
const lat = coordenada.latitud;
const long = coordenada.longitud;

console.log(lat);
console.log(long);

// Acceso usando destructuring
const { latitud, longitud } = coordenada;
console.log(latitud);
console.log(longitud);

// Acceso usando destructuring renombrando variables
// propiedad: nuevo nombre
const { latitud: x, longitud: y } = coordenada;
console.log(x);
console.log(y);
const { latitud: a } = coordenada;
console.log(a);

// Definición de objeto
const forecast = {
  today: {
    min: 18,
    max: 22,
  },
  tomorrow: {
    min: 19,
    max: 25,
  },
};
console.log(forecast);

// Destructuring de objetos complejos
const { today: hoy, tomorrow: manana } = forecast;
console.log(hoy, manana);

const {
  tomorrow: { max: maxTomorrow },
  today: { min: minToday },
} = forecast;

console.log(maxTomorrow);
console.log(minToday);

const {
  today: hoy2,
  today: { min: minima },
} = forecast;

console.log(hoy2);
console.log(minima);

// Desrtucturing con funciones
function imprimirUbicacion1({ ciudad, pais }) {
  console.log(`${ciudad}, ${pais}`);
}
function imprimirUbicacion2({ ciudad: city, pais: country }) {
  console.log(`${city}, ${country}`);
}

// Definición de objetos
const usuario = {
  nombre: "Catalina",
  ciudad: "Melbourne",
  pais: "Australia",
  edad: 21,
};

imprimirUbicacion1(usuario);
imprimirUbicacion2(usuario);

// ------- DESTRUCTURING CON ARREGLOS ---------
// Definición de arreglo
const arreglo = [1, 2, 3, 4, 5];

// Acceso tradicional
// const primero = arreglo[0];
// const segundo = arreglo[1];

// Acceso con destructuring
const [primero, segundo] = arreglo;
console.log(primero, segundo);

const [first, second, , , fifth] = arreglo;
console.log(first, second, fifth);

const [primis, ...resto] = arreglo;
console.log(primis);
console.log(resto);

const nombreCompleto = "Catalina Cardozo";
const [nombres, apellidos] = nombreCompleto.split(" ");
console.log(nombres);
console.log(apellidos);

// Destructuring de datos de retorno de una función
function calcular(numero1, numero2) {
  const suma = numero1 + numero2;
  const resta = numero1 > numero2 ? numero1 - numero2 : numero2 - numero1;
  const multiplicacion = numero1 * numero2;
  const division = numero1 / numero2;

  return [suma, resta, multiplicacion, division];
}

// Invoca una función con destructuring para los datos de retorno
const [s, r, m, d] = calcular(3, 9);
console.log(s);
console.log(r);
console.log(m);
console.log(d);
