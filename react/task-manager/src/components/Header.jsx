import PropTypes from "prop-types";

import Logo from "./Logo";
import Title from "./Title";

import "../styles/Header.scss";

const Header = ({ count }) => {
  return (
    <header>
      <Logo />
      <Title count={count} />
    </header>
  );
};

Header.propTypes = {
  count: PropTypes.number,
};

export default Header;
