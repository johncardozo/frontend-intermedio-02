import PropTypes from "prop-types";

import TaskItem from "./TaskItem";
import "../styles/TaskList.scss";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <h3 className="no-tasks">No tasks</h3>
      ) : (
        <div className="tasks">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
          ))}
        </div>
      )}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
};

export default TaskList;
