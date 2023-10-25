import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "../styles/Form.scss";

const AddTaskForm = ({ onCreateTask }) => {
  const [text, setText] = useState("");

  // Ejecutado cada vez que se actualiza el componente
  useEffect(() => {
    console.log("Re-rendered");
  });

  // Ejecutado SOLO al crear/montar el componente
  useEffect(() => {
    console.log("Componente creado");
  }, []);

  // Ejecuta al crear/montar el componente y cuando cambia
  // el valor de la dependencia
  useEffect(() => {
    console.log("Cambió el texto");
  }, [text]);

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
