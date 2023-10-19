const tasks = [
  { id: "1", text: "Running" },
  { id: "2", text: "Cooking" },
  { id: "3", text: "Drawing" },
  { id: "4", text: "Swimming" },
];

const TaskList = () => {
  const username = "Catalina";
  return (
    <>
      <p>Welcome, {username || "guest"}</p>
      {tasks.length < 0 ? (
        <h1>No tasks</h1>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
      {tasks.length > 0 && <p>Lenght: {tasks.length}</p>}
    </>
  );
};

export default TaskList;
