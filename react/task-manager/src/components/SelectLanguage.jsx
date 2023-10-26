import PropTypes from "prop-types";

import "../styles/Languages.scss";

const SelectLanguage = ({ onChangeLanguage }) => {
  return (
    <div className="languages">
      <span onClick={() => onChangeLanguage("es")}>🇪🇸</span>
      <span onClick={() => onChangeLanguage("en")}>🇬🇧</span>
      <span onClick={() => onChangeLanguage("fr")}>🇫🇷</span>
    </div>
  );
};

SelectLanguage.propTypes = {
  onChangeLanguage: PropTypes.func,
};

export default SelectLanguage;
