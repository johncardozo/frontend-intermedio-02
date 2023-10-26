import { useState, useEffect } from "react";
import axios from "axios";

import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import SelectLanguage from "./components/SelectLanguage";

import LocalizationContext from "./context/LocalizationContext";

import "./styles/App.scss";

const local = {
  es: {
    title: "Administrador de Tareas",
    count: "Cantidad",
    newTask: "Nueva tarea",
    typedCharacters: "Caracteres digitados",
    add: "Agregar",
    textValidation: "Debe digitar el texto de la tarea",
  },
  en: {
    title: "Task Manager",
    count: "Count",
    newTask: "New task",
    typedCharacters: "Typed characters",
    add: "Add",
    textValidation: "You must type the text of the task",
  },
  fr: {
    title: "Gestionnaire des tâches",
    count: "Montant",
    newTask: "Nouveaux devoirs",
    typedCharacters: "Caractères tapés",
    add: "Ajouter",
    textValidation: "Vous devez taper le texte de la tâche",
  },
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [language, setLanguage] = useState(local.es);

  // useEffect se ejecuta una sola vez cuando se monta el componente
  useEffect(() => {
    const getTasks = async () => {
      try {
        // Hace la petición al backend
        const result = await axios.get(import.meta.env.VITE_BACKEND_URL);

        // Verifica el éxito de la petición
        if (result.status === 200) {
          // Modifica el estado
          setTasks(result.data);
        }
      } catch (error) {
        console.error("No hubo conexión al backend");
      }
    };

    // Invoca la función para comunicarse con el backend
    getTasks();
  }, []);

  const onDeleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete the task?")) {
      try {
        // Elimina la tarea del backend
        const result = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}${id}`
        );
        if (result.status === 200) {
          // Elimina el elemento filtrando el arreglo por el id de cada tarea
          // No se puede modificar la variable tasks porque es INMUTABLE
          const resultado = tasks.filter((tarea) => tarea.id !== id);
          // Modifica el estado
          setTasks(resultado);
        }
      } catch (error) {
        alert("Error eliminando la tarea\nIntente más tarde");
        console.log(error);
      }
    }
  };

  const onCreateHandler = async (text) => {
    try {
      // Crea un objeto para la nueva tarea
      const newTask = {
        text,
      };
      // Crea la tarea en el backend
      const result = await axios.post(
        import.meta.env.VITE_BACKEND_URL,
        newTask
      );
      // Verificación de éxito de la operación
      if (result.status === 201) {
        // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva al nueva tarea al final
        const newTasks = [...tasks, result.data];
        // Modifica el estado
        setTasks(newTasks);
      }
    } catch (error) {
      alert("Error creando la tarea\nIntente más tarde!");
      console.log("Hubo un error de comunicación creando la tarea!");
    }
  };

  const handlerLanguageChange = (lang) => {
    // cambia el estdo dependiendo del idioma seleccionado
    setLanguage(local[lang]);
  };

  return (
    <LocalizationContext.Provider value={language}>
      <div className="app">
        <Header count={tasks.length} />
        <SelectLanguage onChangeLanguage={handlerLanguageChange} />
        <AddTaskForm onCreateTask={onCreateHandler} />
        <TaskList tasks={tasks} onDeleteTask={onDeleteHandler} />
      </div>
    </LocalizationContext.Provider>
  );
}

export default App;
