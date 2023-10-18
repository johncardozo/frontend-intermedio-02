/* eslint-disable react/prop-types */
const Title = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <h3>{props.small}</h3>
    </>
  );
};

// Propiedades por defecto
Title.defaultProps = {
  text: "Admin Tareas",
  small: "App",
};

export default Title;
