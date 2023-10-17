// Importa el CSS
import "./App.css";

function App() {
  const nombre = "Catalina";
  const edad = 15;

  return (
    <>
      <p>El nombre de la estudiante es {nombre}</p>
      <p>{edad > 18 ? "Adulto" : "Niño"}</p>
    </>
  );
}

export default App;
