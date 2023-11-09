import { useContext } from "react";

import LocalizationContext from "../context/LocalizationContext";
import local from "../context/LocalizationData";

import "../styles/Languages.scss";

const SelectLanguage = () => {
  // Obtiene el contexto
  const { setLanguage } = useContext(LocalizationContext);

  return (
    <div className="languages">
      <span onClick={() => setLanguage(local.es)}>🇪🇸</span>
      <span onClick={() => setLanguage(local.en)}>🇬🇧</span>
      <span onClick={() => setLanguage(local.fr)}>🇫🇷</span>
    </div>
  );
};

export default SelectLanguage;
