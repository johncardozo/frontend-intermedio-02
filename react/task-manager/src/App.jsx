import { useState, useEffect } from "react";
import axios from "axios";

import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect se ejecuta una sola vez cuando se monta el componente
  useEffect(() => {
    const getTasks = async () => {
      try {
        // Hace la petición al backend
        const result = await axios.get("http://localhost:3000/tasks");

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

  const onDeleteHandler = (id) => {
    if (confirm("Are you sure you want to delete the task?")) {
      // Elimina el elemento filtrando el arreglo por el id de cada tarea
      // No se puede modificar la variable tasks porque es INMUTABLE
      const resultado = tasks.filter((tarea) => tarea.id !== id);
      // Modifica el estado
      setTasks(resultado);
    }
  };

  const onCreateHandler = async (text) => {
    // Crea un objeto para la nueva tarea
    const newTask = {
      text,
    };
    // Crea la tarea en el backend
    const result = await axios.post("http://localhost:3000/tasks", newTask);
    // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva al nueva tarea al final
    const newTasks = [...tasks, result.data];
    // Modifica el estado
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Header count={tasks.length} />
      <AddTaskForm onCreateTask={onCreateHandler} />
      <TaskList tasks={tasks} onDeleteTask={onDeleteHandler} />
    </div>
  );
}

export default App;
