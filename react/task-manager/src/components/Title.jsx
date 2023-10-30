import PropTypes from "prop-types";
import { useContext } from "react";

import LocalizationContext from "../context/LocalizationContext";

import "../styles/Title.scss";

const Title = ({ count }) => {
  // Obtiene el contexto
  const { language } = useContext(LocalizationContext);

  return (
    <div className="title">
      <h2>{language.title}</h2>
      <h5>
        {language.count}: {count}
      </h5>
    </div>
  );
};

// Propiedades por defecto
Title.defaultProps = {
  count: 0,
};

// Define tipos de parámetros
Title.propTypes = {
  count: PropTypes.number,
};

export default Title;
