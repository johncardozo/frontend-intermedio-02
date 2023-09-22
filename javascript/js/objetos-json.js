// Objetos JSON
// JSON -> JavaScript Object Notation

let variable = 4;
let arreglos = [1, 2, 3, 4];
let objeto = {
  nombre: "Catalina",
  email: "cata@gmail.com",
  edad: 21,
  hobbies: ["movies", "running", "music"],
  esAdulto() {
    return this.edad >= 18;
  },
};
console.log(objeto);
// Operador punto
let n1 = objeto.nombre;
console.log(n1);
// Operador llaves
let n2 = objeto["nombre"];
console.log(n2);
// Acceso a un arreglo en una propiedad de un objeto
console.log(objeto.hobbies[1]);
// Recorre un arreglo en un objeto
objeto.hobbies.forEach((hobby) => console.log(hobby));
// Ejecuta una función de un objeto -> método
console.log(objeto.esAdulto());

let banda = "The Beatles";
// Definición de un objeto
let usuario = {
  nombre: "John",
  email: "john@gmail.com",
  banda, // abreviación de la asignación de una variable a una propiedad
};

console.log(usuario);

// Modifica un propiedad de un objeto
usuario.nombre = "Paul";
console.log(usuario);

// Si la propiedad no existe, la crea
usuario.ciudad = "Liverpool";
usuario.email = "paul@gmai.com";
console.log(usuario);

// Elimina una propiedad del objeto
delete usuario.ciudad;
console.log(usuario);

// Verifica si una propiedad existe en un objeto
let tieneCiudad = usuario.hasOwnProperty("ciudad");
console.log(tieneCiudad);
let tieneNombre = usuario.hasOwnProperty("nombre");
console.log(tieneNombre);

const ubicacion = {
  ciudad: "Medellin",
  departamento: "Antioquia",
  pais: "Colombia",
};

console.log(ubicacion);

// Bloquea la modificación del objeto
Object.freeze(ubicacion);
ubicacion.ciudad = "Envigado";

console.log(ubicacion);
