import { useState } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import "./styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Running" },
    { id: "2", text: "Cooking" },
    { id: "3", text: "Drawing" },
    { id: "4", text: "Swimming" },
  ]);

  return (
    <div className="app">
      <Header />
      <Form />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
