import PropTypes from "prop-types";

import TaskItem from "./TaskItem";
import "../styles/TaskList.scss";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <h3 className="no-tasks">No tasks</h3>
      ) : (
        <div className="tasks">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={onDelete} />
          ))}
        </div>
      )}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
};

export default TaskList;
