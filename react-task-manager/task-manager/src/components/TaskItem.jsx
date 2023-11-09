import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

import "../styles/TaskItem.scss";

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <FaTrashAlt className="delete" onClick={() => onDelete(task.id)} />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
};

export default TaskItem;
