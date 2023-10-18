const tasks = [
  { id: "1", text: "Running" },
  { id: "2", text: "Cooking" },
  { id: "3", text: "Drawing" },
  { id: "4", text: "Swimming" },
];

const TaskList = () => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default TaskList;
