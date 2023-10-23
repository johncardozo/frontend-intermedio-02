import { useState } from "react";

import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  const onDeleteHandler = (id) => {
    if (confirm("Are you sure you want to delete the task?")) {
      // Elimina el elemento filtrando el arreglo por el id de cada tarea
      // No se puede modificar la variable tasks porque es INMUTABLE
      const resultado = tasks.filter((tarea) => tarea.id !== id);
      // Modifica el estado
      setTasks(resultado);
    }
  };

  const onCreateHandler = (text) => {
    // Crea un objeto para la nueva tarea
    const newTask = {
      id: crypto.randomUUID(),
      text,
    };
    // Crea un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva al nueva tarea al final
    const newTasks = [...tasks, newTask];
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
