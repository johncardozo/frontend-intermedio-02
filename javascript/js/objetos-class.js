// Clases: definición de un objeto
// Objeto: una variable con una estructura (clase)

// Variables, atributos, métodos, funciones: camelCase
let datoUsuario = 0;

// Constantes
const DIAS_SEMANA = 7;

// Definición de clase
class Usuario {
  ciudad = "Bogota"; // Propiedad por defecto
  constructor(nombres, apellidos, edad) {
    this.nombres = nombres; // Propiedad / Atributo
    this.apellidos = apellidos; // Propiedad / Atributo
    this.edad = edad; // Propiedad / Atributo
  }
}

// Instanciación de objetos
let usuario1 = new Usuario("Catalina", "Giraldo", 21, "Medellin");
console.log(usuario1);

let usuario2 = new Usuario("Emilio", "Barrera", 18);
console.log(usuario2);

// Modifica un propiedad del objeto
usuario2.edad = 20;

// Obtiene el valor de una propiedad de un objeto
console.log(usuario2.edad);

class Triangulo {
  #area; // Propiedad privada
  #base;
  #altura;
  constructor(base, altura) {
    this.#base = base;
    this.#altura = altura;
    this.#calcularArea();
  }
  // Función privada
  #calcularArea() {
    this.#area = (this.#base * this.#altura) / 2;
  }
  // setters
  set altura(altura) {
    this.#altura = altura;
    this.#calcularArea();
  }
  set base(base) {
    this.#base = base;
    this.#calcularArea();
  }
  // getters
  get altura() {
    return this.#altura;
  }
  get base() {
    return this.#base;
  }
  get area() {
    return this.#area;
  }
}
// Instanciación de un objeto
let triangulo1 = new Triangulo(15, 3);
console.log(triangulo1);
// Uso de setters: set = modificar
triangulo1.altura = 20;
triangulo1.base = 4;
// Uso de getters: get = obtener
console.log(
  `Para un triángulo de base: ${triangulo1.base} y altura: ${triangulo1.altura}, su área será ${triangulo1.area}`
);

class Song {
  constructor(artist, title, year) {
    this.artist = artist;
    this.title = title;
    this.year = year;
  }
}

// Creación de objetos
const song1 = new Song("ACDC", "Back in Black", 1980);
const song2 = new Song("Guns and Roses", "Welcome to the Jungle", 1991);
const song3 = new Song("Metallica", "Whisky in the jar", 1998);

// Agregar objetos a un arreglo
let collection = [];
collection.push(song1);
collection.push(song2);
collection.push(song3);

console.table(collection);
// Acceso a un atributo de un objeto en un arreglo
console.log(collection[1].title);

// Recorrer un arreglo de objetos
collection.forEach((s) => {
  console.log(`${s.title} fue grabada en ${s.year} por ${s.artist}`);
});
