import PropTypes from "prop-types";

import TaskItem from "./TaskItem";
import "../styles/TaskList.scss";

const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <h3>No tasks</h3>
      ) : (
        <div className="tasks">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
