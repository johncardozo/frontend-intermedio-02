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
