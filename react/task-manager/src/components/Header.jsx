import Logo from "./Logo";
import Title from "./Title";

import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <Title text="Task manager" small="The best task app ever!" />
    </header>
  );
};

export default Header;
