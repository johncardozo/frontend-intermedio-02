import { useState } from "react";
import PropTypes from "prop-types";

import "../styles/Form.scss";

const AddTaskForm = ({ onCreateTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    // Previene que se envíe información al servidor refrescando la página
    event.preventDefault();
    // Valida que el usuario haya digitado un texto
    if (!text) {
      alert("You must type the text of the task");
      return;
    }
    // Envía la nueva tarea al componente padre
    onCreateTask(text);
    // Limpia el formulario
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">New task:</label>
      <input
        type="text"
        className="form__input"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="form__button">Add</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
};

export default AddTaskForm;
