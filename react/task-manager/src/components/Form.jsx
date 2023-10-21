import "../styles/Form.scss";

const Form = () => {
  return (
    <form className="form">
      <label className="form__label">New task</label>
      <input type="text" className="form__input" />
      <button className="form__button">Add</button>
    </form>
  );
};

export default Form;