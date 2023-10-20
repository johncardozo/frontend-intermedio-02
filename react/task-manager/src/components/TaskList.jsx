import { useState } from "react";

const TaskList = () => {
  // INMUTABLE
  // tasks = variable que contiene el estado
  // setTasks = función que permite modificar el estado
  const [tasks, setTasks] = useState([
    { id: "1", text: "Running" },
    { id: "2", text: "Cooking" },
    { id: "3", text: "Drawing" },
    { id: "4", text: "Swimming" },
  ]);

  return (
    <>
      {tasks.length === 0 ? (
        <h3>No tasks</h3>
      ) : (
        <>
          {tasks.map((task) => (
            <h4 key={task.id}>{task.text}</h4>
          ))}
        </>
      )}
    </>
  );
};

export default TaskList;
