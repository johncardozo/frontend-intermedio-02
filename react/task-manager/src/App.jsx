import { useState } from "react";

import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Running" },
    { id: "2", text: "Cooking" },
    { id: "3", text: "Drawing" },
    { id: "4", text: "Swimming" },
    { id: "5", text: "Programming" },
  ]);

  const onDeleteHandler = (id) => {
    if (confirm("Are you sure you want to delete the task?")) {
      // Elimina el elemento filtrando el arreglo por el id de cada tarea
      // No se puede modificar la variable tasks porque es INMUTABLE
      const resultado = tasks.filter((tarea) => tarea.id !== id);
      // Modifica el estado
      setTasks(resultado);
    }
  };

  return (
    <div className="app">
      <Header count={tasks.length} />
      <AddTaskForm />
      <TaskList tasks={tasks} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
