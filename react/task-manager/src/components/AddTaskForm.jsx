import "../styles/Form.scss";

const AddTaskForm = () => {
  return (
    <form className="form">
      <label className="form__label">New task</label>
      <input type="text" className="form__input" />
      <button className="form__button">Add</button>
    </form>
  );
};

export default AddTaskForm;
