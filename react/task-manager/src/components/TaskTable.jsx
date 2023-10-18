const tasks = [
  { id: "1", text: "Running" },
  { id: "2", text: "Cooking" },
  { id: "3", text: "Drawing" },
  { id: "4", text: "Swimming" },
  { id: "5", text: "Movies" },
];

const TaskTable = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>Hobbie</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
