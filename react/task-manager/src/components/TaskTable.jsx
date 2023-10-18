const tasks = [
  { id: "1", text: "Running", completed: false },
  { id: "2", text: "Cooking", completed: true },
  { id: "3", text: "Drawing", completed: true },
  { id: "4", text: "Swimming", completed: false },
  { id: "5", text: "Movies", completed: true },
];

const TaskTable = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>Hobbie</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {/* Recorre la lista */}
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.text}</td>
            <td>{`${task.completed}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
