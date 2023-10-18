import PropTypes from "prop-types";

const Title = ({ text, small }) => {
  return (
    <>
      <h1>{text}</h1>
      <h3>{small}</h3>
    </>
  );
};

// Propiedades por defecto
Title.defaultProps = {
  text: "Admin Tareas",
  small: "App",
};

// Define tipos de parámetros
Title.propTypes = {
  //text: PropTypes.string.isRequired,
  text: PropTypes.string,
  small: PropTypes.string,
};

export default Title;
