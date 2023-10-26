import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

import LocalizationContext from "../context/LocalizationContext";

import "../styles/Form.scss";

const AddTaskForm = ({ onCreateTask }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  // Obtiene el contexto
  const local = useContext(LocalizationContext);

  // Detecta los cambios en la variable "text"
  // y actualiza la variable "amount"
  useEffect(() => {
    setAmount(text.length);
  }, [text]);

  const handleSubmit = (event) => {
    // Previene que se envíe información al servidor refrescando la página
    event.preventDefault();
    // Valida que el usuario haya digitado un texto
    if (!text) {
      alert(local.textValidation);
      return;
    }
    // Envía la nueva tarea al componente padre
    onCreateTask(text);
    // Limpia el formulario
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">{local.newTask}:</label>
      <input
        type="text"
        className="form__input"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <small>
        {local.typedCharacters}: {amount}
      </small>
      <button className="form__button">{local.add}</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
};

export default AddTaskForm;
