// Obtiene acceso a un elemento del DOM Tree
const titulo = document.getElementById("titulo");
console.log(titulo);

// Modificar el texto
titulo.textContent = "Nuevo texto";
// Modificar el estilo
titulo.style.color = "red";

const hora = document.getElementById("hora");
function clickHandler() {
  console.log("Me hicieron click");
}
hora.addEventListener("click", clickHandler);

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  titulo.classList.toggle("ocultar");
});

const paises = document.getElementsByClassName("pais");

for (let i = 0; i < paises.length; i++) {
  const pais = paises[i];
  if (pais.textContent === "Escocia") {
    pais.style.color = "white";
    pais.style.backgroundColor = "navy";
  }

  pais.addEventListener("click", function (event) {
    const elemento = event.target;
    elemento.style.textDecoration = "line-through";
  });
}
