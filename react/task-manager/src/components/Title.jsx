import PropTypes from "prop-types";

const Title = ({ text, small }) => {
  // Estilos en un objeto
  const subHeadingStyles = {
    color: small.length > 3 ? "white" : "yellow",
    textDecoration: "underline",
  };

  return (
    <>
      <h1 style={{ color: "white", backgroundColor: "red" }}>{text}</h1>
      <h3 style={subHeadingStyles}>{small}</h3>
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
